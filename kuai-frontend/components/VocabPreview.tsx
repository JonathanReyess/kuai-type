import React, { useState, useEffect, useRef } from "react";
import { VocabItem } from "../types";
import { XMarkIcon } from "./Icons";

interface VocabPreviewProps {
  vocabulary: VocabItem[];
  onClose: () => void;
}

type ExportFormat = "quizlet" | "anki" | "smartcards";

function downloadText(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function buildExport(vocab: VocabItem[], format: ExportFormat): string {
  switch (format) {
    case "quizlet":
      // Front: simplified | Back: pinyin — definition
      return vocab.map((v) => `${v.simplified}\t${v.pinyin} — ${v.definition}`).join("\n");
    case "anki":
      // Three fields so you can map to Front/Back/Extra in Anki
      return vocab.map((v) => `${v.simplified}\t${v.pinyin}\t${v.definition}`).join("\n");
    case "smartcards":
      // Sides separated by tab, cards by newline
      return vocab.map((v) => `${v.simplified}\t${v.pinyin} — ${v.definition}`).join("\n");
  }
}

const EXPORT_OPTIONS: { format: ExportFormat; label: string; ext: string; hint: string }[] = [
  { format: "quizlet",    label: "Quizlet",    ext: ".txt",  hint: "Simplified → Pinyin + Definition" },
  { format: "anki",       label: "Anki",       ext: ".txt",  hint: "3 fields: Simplified · Pinyin · Definition" },
  { format: "smartcards", label: "Smartcards", ext: ".txt",  hint: "Tab-separated sides, one card per line" },
];

export const VocabPreview: React.FC<VocabPreviewProps> = ({
  vocabulary,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showExport, setShowExport] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Close export dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
    };
    if (showExport) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showExport]);

  const stripTones = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filteredVocab = vocabulary.filter((vocab) => {
    const q = stripTones(searchQuery);
    return (
      stripTones(vocab.pinyin).includes(q) ||
      vocab.simplified.includes(searchQuery) ||
      vocab.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleExport = (format: ExportFormat) => {
    const content = buildExport(vocabulary, format);
    const ext = EXPORT_OPTIONS.find((o) => o.format === format)!.ext;
    downloadText(content, `kuai-vocab-${format}${ext}`);
    setShowExport(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-[#f8f7f4] w-full max-w-4xl max-h-[80vh] border-4 border-black p-8 flex flex-col shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-md window-popout">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-4">
          <h2 className="text-3xl font-serif font-bold">Vocabulary List</h2>
          <div className="flex items-center gap-3">
            {/* Export button + dropdown */}
            <div className="relative" ref={exportRef}>
              <button
                onClick={() => setShowExport((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-black font-serif text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Export
              </button>

              {showExport && (
                <div className="absolute right-0 top-full mt-1 w-72 bg-[#f8f7f4] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20">
                  <p className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest text-black/40 font-serif">
                    Export {vocabulary.length} words as…
                  </p>
                  {EXPORT_OPTIONS.map(({ format, label, ext, hint }) => (
                    <button
                      key={format}
                      onClick={() => handleExport(format)}
                      className="w-full text-left px-4 py-3 hover:bg-black hover:text-white transition-colors border-t border-black/10 first:border-t-0 group"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-serif font-bold text-sm">{label}</span>
                        <span className="font-serif text-xs text-black/40 group-hover:text-white/60">{ext}</span>
                      </div>
                      <p className="font-serif text-xs text-black/50 mt-0.5 group-hover:text-white/60">{hint}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={onClose} className="hover:rotate-90 transition-transform p-1">
              <XMarkIcon className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search by pinyin, Chinese, or English..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 border-2 border-black rounded-sm font-serif outline-none focus:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]"
            autoFocus
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black font-serif text-sm"
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-y-auto pr-4 custom-scrollbar flex-grow">
          {filteredVocab.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-[#f8f7f4] z-10">
                <tr className="font-serif text-lg border-b border-black">
                  <th className="py-2">Simplified</th>
                  <th className="py-2">Pinyin</th>
                  <th className="py-2">Definition</th>
                </tr>
              </thead>
              <tbody className="font-chinese text-lg">
                {filteredVocab.map((vocab, index) => (
                  <tr
                    key={index}
                    className="border-b border-black/10 hover:bg-[#f0efe9] transition-colors"
                  >
                    <td
                      className="py-3 font-bold text-3xl"
                      style={{ fontFamily: "'Ma Shan Zheng', cursive" }}
                    >
                      {vocab.simplified}
                    </td>
                    <td className="py-3 font-serif text-black/70">{vocab.pinyin}</td>
                    <td className="py-3 font-serif text-black/60 italic">{vocab.definition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="h-full flex flex-col items-center justify-center py-12 text-black/40 font-serif italic">
              <p>No words match your search.</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs font-serif text-black/40 uppercase tracking-widest">
          Press ESC or click X to close
        </div>
      </div>
    </div>
  );
};
