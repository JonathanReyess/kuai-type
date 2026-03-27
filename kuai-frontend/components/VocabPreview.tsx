import React, { useState, useEffect } from "react";
import { VocabItem } from "../types";
import { XMarkIcon } from "./Icons";

interface VocabPreviewProps {
  vocabulary: VocabItem[];
  onClose: () => void;
}

export const VocabPreview: React.FC<VocabPreviewProps> = ({
  vocabulary,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // --- ADD THIS BLOCK ---
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Helper function to strip tone marks/diacritics
  const stripTones = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  // Filter the vocabulary
  const filteredVocab = vocabulary.filter((vocab) => {
    const normalizedQuery = stripTones(searchQuery);
    const normalizedPinyin = stripTones(vocab.pinyin);

    return (
      normalizedPinyin.includes(normalizedQuery) ||
      vocab.simplified.includes(searchQuery)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-[#f8f7f4] w-full max-w-4xl max-h-[80vh] border-4 border-black p-8 flex flex-col shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-md window-popout">
        <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-4">
          <div>
            <h2 className="text-3xl font-serif font-bold">Vocabulary List</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:rotate-90 transition-transform p-1"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>

        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search by pinyin (e.g. 'jiu')..."
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
                    <td className="py-3 font-serif text-black/70">
                      {vocab.pinyin}
                    </td>
                    <td className="py-3 font-serif text-black/60 italic">
                      {vocab.definition}
                    </td>
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
