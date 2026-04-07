// src/data/storyData.ts
import { GameToken, Difficulty } from "./types";

// Type definition for your story structure
type StoryDatabase = {
  [key: string]: {
    // Lesson ID (e.g., "festival")
    [key in Difficulty]: GameToken[][]; // Array of Token Arrays (Stories)
  };
};

export const PRE_GENERATED_STORIES: StoryDatabase = {
  festival: {
    easy: [
      [
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "舅", pinyin: "jiu4", definition: "aunt" },
        { char: "妈", pinyin: "ma1", definition: "aunt" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "小", pinyin: "xiao3", definition: "small" },
        { char: "区", pinyin: "qu1", definition: "area" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "here" },
        { char: "环", pinyin: "huan2", definition: "environment" },
        { char: "境", pinyin: "jing4", definition: "environment" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "除", pinyin: "chu2", definition: "CNY Eve" },
        { char: "夕", pinyin: "xi1", definition: "CNY Eve" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "年", pinyin: "nian2", definition: "CNY Eve dinner" },
        { char: "夜", pinyin: "ye4", definition: "CNY Eve dinner" },
        { char: "饭", pinyin: "fan4", definition: "CNY Eve dinner" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "举", pinyin: "ju3", definition: "to lift" },
        { char: "杯", pinyin: "bei1", definition: "cup" },
        { char: "喝", pinyin: "he1", definition: "to drink" },
        { char: "酒", pinyin: "jiu3", definition: "alcohol" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "干", pinyin: "gan1", definition: "to toast" },
        { char: "杯", pinyin: "bei1", definition: "to toast" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "墙", pinyin: "qiang2", definition: "wall" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "贴", pinyin: "tie1", definition: "to paste" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "字", pinyin: "zi4", definition: "character" },
        { char: "倒", pinyin: "dao4", definition: "upside down" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "意", pinyin: "yi4", definition: "meaning" },
        { char: "思", pinyin: "si0", definition: "meaning" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "春", pinyin: "chun1", definition: "Spring Festival" },
        { char: "节", pinyin: "jie2", definition: "Spring Festival" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "传", pinyin: "chuan2", definition: "tradition" },
        { char: "统", pinyin: "tong3", definition: "tradition" },
        { char: "节", pinyin: "jie2", definition: "holiday" },
        { char: "日", pinyin: "ri4", definition: "holiday" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "拜", pinyin: "bai4", definition: "pay call" },
        { char: "年", pinyin: "nian2", definition: "pay call" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "恭", pinyin: "gong1", definition: "congratulate" },
        { char: "喜", pinyin: "xi3", definition: "congratulate" },
        { char: "发", pinyin: "fa1", definition: "get rich" },
        { char: "财", pinyin: "cai2", definition: "get rich" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "中", pinyin: "zhong1", definition: "Mid-Autumn" },
        { char: "秋", pinyin: "qiu1", definition: "Mid-Autumn" },
        { char: "节", pinyin: "jie2", definition: "Mid-Autumn" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "月", pinyin: "yue4", definition: "moon cake" },
        { char: "饼", pinyin: "bing3", definition: "moon cake" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "全", pinyin: "quan2", definition: "whole" },
        { char: "家", pinyin: "jia1", definition: "family" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "团", pinyin: "tuan2", definition: "reunite" },
        { char: "圆", pinyin: "yuan2", definition: "reunite" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "热", pinyin: "re4", definition: "lively" },
        { char: "闹", pinyin: "nao0", definition: "lively" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "端", pinyin: "duan1", definition: "Dragon Boat" },
        { char: "午", pinyin: "wu3", definition: "Dragon Boat" },
        { char: "节", pinyin: "jie2", definition: "Dragon Boat" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "粽", pinyin: "zong4", definition: "sticky-rice dumpling" },
        { char: "子", pinyin: "zi0", definition: "sticky-rice dumpling" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "浪", pinyin: "lang4", definition: "waste" },
        { char: "费", pinyin: "fei4", definition: "waste" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "完", pinyin: "wan2", definition: "finish" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "元", pinyin: "yuan2", definition: "Lantern Festival" },
        { char: "宵", pinyin: "xiao1", definition: "Lantern Festival" },
        { char: "节", pinyin: "jie2", definition: "Lantern Festival" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "正", pinyin: "zheng1", definition: "first month" },
        { char: "月", pinyin: "yue4", definition: "first month" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "元", pinyin: "yuan2", definition: "sweet dumplings" },
        { char: "宵", pinyin: "xiao1", definition: "sweet dumplings" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "嘛", pinyin: "ma0", definition: "particle" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "外", pinyin: "wai4", definition: "outside" },
        { char: "面", pinyin: "mian4", definition: "side" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "鞭", pinyin: "bian1", definition: "firecracker" },
        { char: "炮", pinyin: "pao4", definition: "firecracker" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "奇", pinyin: "qi2", definition: "strange" },
        { char: "怪", pinyin: "guai4", definition: "strange" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "计", pinyin: "ji4", definition: "count time" },
        { char: "时", pinyin: "shi2", definition: "count time" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "余", pinyin: "yu2", definition: "surplus" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "鱼", pinyin: "yu2", definition: "fish" },
        { char: "剩", pinyin: "sheng4", definition: "left over" },
        { char: "下", pinyin: "xia4", definition: "left over" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "少", pinyin: "shao3", definition: "few" },
        { char: "？", pinyin: "？", definition: "punctuation" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "成", pinyin: "cheng2", definition: "succeed" },
        { char: "功", pinyin: "gong1", definition: "succeed" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "红", pinyin: "hong2", definition: "red envelope" },
        { char: "包", pinyin: "bao1", definition: "red envelope" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "钱", pinyin: "qian2", definition: "money" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "顺", pinyin: "shun4", definition: "smooth" },
        { char: "利", pinyin: "li4", definition: "smooth" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "学", pinyin: "xue2", definition: "study" },
        { char: "习", pinyin: "xi2", definition: "study" },
        { char: "进", pinyin: "jin4", definition: "progress" },
        { char: "步", pinyin: "bu4", definition: "progress" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
    ],

    medium: [
      [
        { char: "除", pinyin: "chu2", definition: "CNY Eve" },
        { char: "夕", pinyin: "xi1", definition: "CNY Eve" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "吃", pinyin: "chi1", definition: "to eat" },
        { char: "年", pinyin: "nian2", definition: "CNY Eve dinner" },
        { char: "夜", pinyin: "ye4", definition: "CNY Eve dinner" },
        { char: "饭", pinyin: "fan4", definition: "CNY Eve dinner" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "举", pinyin: "ju3", definition: "to lift" },
        { char: "杯", pinyin: "bei1", definition: "cup" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "以", pinyin: "yi3", definition: "with" },
        { char: "水", pinyin: "shui3", definition: "water" },
        { char: "代", pinyin: "dai4", definition: "to replace" },
        { char: "酒", pinyin: "jiu3", definition: "alcohol" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "一", pinyin: "yi1", definition: "together" },
        { char: "起", pinyin: "qi3", definition: "together" },
        { char: "干", pinyin: "gan1", definition: "to toast" },
        { char: "杯", pinyin: "bei1", definition: "to toast" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "小", pinyin: "xiao3", definition: "residential complex" },
        { char: "区", pinyin: "qu1", definition: "residential complex" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "环", pinyin: "huan2", definition: "environment" },
        { char: "境", pinyin: "jing4", definition: "environment" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "春", pinyin: "chun1", definition: "Spring Festival" },
        { char: "节", pinyin: "jie2", definition: "Spring Festival" },
        { char: "到", pinyin: "dao4", definition: "arrive" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "墙", pinyin: "qiang2", definition: "wall" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "贴", pinyin: "tie1", definition: "to paste" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "倒", pinyin: "dao4", definition: "upside down" },
        { char: "着", pinyin: "zhe0", definition: "particle" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "字", pinyin: "zi4", definition: "character" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "觉", pinyin: "jue2", definition: "feel" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "奇", pinyin: "qi2", definition: "strange" },
        { char: "怪", pinyin: "guai4", definition: "strange" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "为", pinyin: "wei4", definition: "why" },
        { char: "什", pinyin: "shen2", definition: "why" },
        { char: "么", pinyin: "me0", definition: "why" },
        { char: "把", pinyin: "ba3", definition: "marker" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "倒", pinyin: "dao4", definition: "upside down" },
        { char: "着", pinyin: "zhe0", definition: "particle" },
        { char: "贴", pinyin: "tie1", definition: "to paste" },
        { char: "？", pinyin: "？", definition: "punctuation" },
        { char: "舅", pinyin: "jiu4", definition: "aunt" },
        { char: "妈", pinyin: "ma1", definition: "aunt" },
        { char: "说", pinyin: "shuo1", definition: "to say" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "意", pinyin: "yi4", definition: "meaning" },
        { char: "思", pinyin: "si0", definition: "meaning" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "到", pinyin: "dao4", definition: "arrived" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "中", pinyin: "zhong1", definition: "Mid-Autumn" },
        { char: "秋", pinyin: "qiu1", definition: "Mid-Autumn" },
        { char: "节", pinyin: "jie2", definition: "Mid-Autumn" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "团", pinyin: "tuan2", definition: "reunion" },
        { char: "圆", pinyin: "yuan2", definition: "reunion" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "节", pinyin: "jie2", definition: "holiday" },
        { char: "日", pinyin: "ri4", definition: "holiday" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "一", pinyin: "yi1", definition: "together" },
        { char: "起", pinyin: "qi3", definition: "together" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "月", pinyin: "yue4", definition: "moon cake" },
        { char: "饼", pinyin: "bing3", definition: "moon cake" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "浪", pinyin: "lang4", definition: "waste" },
        { char: "费", pinyin: "fei4", definition: "waste" },
        { char: "剩", pinyin: "sheng4", definition: "left over" },
        { char: "下", pinyin: "xia4", definition: "left over" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "食", pinyin: "shi2", definition: "food" },
        { char: "物", pinyin: "wu4", definition: "food" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "端", pinyin: "duan1", definition: "Dragon Boat" },
        { char: "午", pinyin: "wu3", definition: "Dragon Boat" },
        { char: "节", pinyin: "jie2", definition: "Dragon Boat" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "传", pinyin: "chuan2", definition: "tradition" },
        { char: "统", pinyin: "tong3", definition: "tradition" },
        { char: "节", pinyin: "jie2", definition: "holiday" },
        { char: "日", pinyin: "ri4", definition: "holiday" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "按", pinyin: "an4", definition: "according to" },
        { char: "照", pinyin: "zhao4", definition: "according to" },
        { char: "农", pinyin: "nong2", definition: "lunar calendar" },
        { char: "历", pinyin: "li4", definition: "lunar calendar" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "初", pinyin: "chu1", definition: "early" },
        { char: "五", pinyin: "wu3", definition: "five" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "粽", pinyin: "zong4", definition: "sticky-rice dumpling" },
        { char: "子", pinyin: "zi0", definition: "sticky-rice dumpling" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "元", pinyin: "yuan2", definition: "Lantern Festival" },
        { char: "宵", pinyin: "xiao1", definition: "Lantern Festival" },
        { char: "节", pinyin: "jie2", definition: "Lantern Festival" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "晚", pinyin: "wan3", definition: "night" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "看", pinyin: "kan4", definition: "watch" },
        { char: "晚", pinyin: "wan3", definition: "evening gathering" },
        { char: "会", pinyin: "hui4", definition: "evening gathering" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "些", pinyin: "xie1", definition: "some" },
        { char: "元", pinyin: "yuan2", definition: "sweet dumplings" },
        { char: "宵", pinyin: "xiao1", definition: "sweet dumplings" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "心", pinyin: "xin1", definition: "heart" },
        { char: "情", pinyin: "qing2", definition: "mood" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "热", pinyin: "re4", definition: "lively" },
        { char: "闹", pinyin: "nao0", definition: "lively" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "春", pinyin: "chun1", definition: "Spring Festival" },
        { char: "节", pinyin: "jie2", definition: "Spring Festival" },
        { char: "期", pinyin: "qi1", definition: "period" },
        { char: "间", pinyin: "jian1", definition: "period" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "外", pinyin: "wai4", definition: "outside" },
        { char: "面", pinyin: "mian4", definition: "face" },
        { char: "放", pinyin: "fang4", definition: "to set off" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "许", pinyin: "xu3", definition: "many" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "鞭", pinyin: "bian1", definition: "firecracker" },
        { char: "炮", pinyin: "pao4", definition: "firecracker" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "小", pinyin: "xiao3", definition: "little" },
        { char: "孩", pinyin: "hai2", definition: "child" },
        { char: "忙", pinyin: "mang2", definition: "busy" },
        { char: "着", pinyin: "zhe0", definition: "particle" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "拜", pinyin: "bai4", definition: "pay call" },
        { char: "年", pinyin: "nian2", definition: "pay call" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "拿", pinyin: "na2", definition: "get" },
        { char: "到", pinyin: "dao4", definition: "get" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "红", pinyin: "hong2", definition: "red envelope" },
        { char: "包", pinyin: "bao1", definition: "red envelope" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "福", pinyin: "fu2", definition: "wish" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "生", pinyin: "sheng1", definition: "life" },
        { char: "活", pinyin: "huo2", definition: "life" },
        { char: "顺", pinyin: "shun4", definition: "smooth" },
        { char: "利", pinyin: "li4", definition: "smooth" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "作", pinyin: "zuo4", definition: "work" },
        { char: "成", pinyin: "cheng2", definition: "success" },
        { char: "功", pinyin: "gong1", definition: "success" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "在", pinyin: "zai4", definition: "in" },
        { char: "新", pinyin: "xin1", definition: "new" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "学", pinyin: "xue2", definition: "study" },
        { char: "业", pinyin: "ye4", definition: "studies" },
        { char: "进", pinyin: "jin4", definition: "progress" },
        { char: "步", pinyin: "bu4", definition: "progress" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "正", pinyin: "zheng1", definition: "first month" },
        { char: "月", pinyin: "yue4", definition: "first month" },
        { char: "初", pinyin: "chu1", definition: "first" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "开", pinyin: "kai1", definition: "start" },
        { char: "始", pinyin: "shi3", definition: "start" },
        { char: "计", pinyin: "ji4", definition: "count time" },
        { char: "时", pinyin: "shi2", definition: "count time" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "余", pinyin: "yu2", definition: "surplus" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "愿", pinyin: "yuan4", definition: "wish" },
        { char: "嘛", pinyin: "ma0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "给", pinyin: "gei3", definition: "to" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "家", pinyin: "jia1", definition: "family" },
        { char: "拜", pinyin: "bai4", definition: "pay call" },
        { char: "年", pinyin: "nian2", definition: "pay call" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "说", pinyin: "shuo1", definition: "to say" },
        { char: "恭", pinyin: "gong1", definition: "congratulate" },
        { char: "喜", pinyin: "xi3", definition: "congratulate" },
        { char: "发", pinyin: "fa1", definition: "get rich" },
        { char: "财", pinyin: "cai2", definition: "get rich" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "气", pinyin: "qi4", definition: "atmosphere" },
        { char: "氛", pinyin: "fen1", definition: "atmosphere" },
        { char: "特", pinyin: "te4", definition: "especially" },
        { char: "别", pinyin: "bie2", definition: "especially" },
        { char: "热", pinyin: "re4", definition: "lively" },
        { char: "闹", pinyin: "nao0", definition: "lively" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],

    hard: [
      [
        { char: "除", pinyin: "chu2", definition: "CNY Eve" },
        { char: "夕", pinyin: "xi1", definition: "CNY Eve" },
        { char: "夜", pinyin: "ye4", definition: "night" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "年", pinyin: "nian2", definition: "CNY Eve dinner" },
        { char: "夜", pinyin: "ye4", definition: "CNY Eve dinner" },
        { char: "饭", pinyin: "fan4", definition: "CNY Eve dinner" },
        { char: "非", pinyin: "fei1", definition: "extremely" },
        { char: "常", pinyin: "chang2", definition: "extremely" },
        { char: "丰", pinyin: "feng1", definition: "abundant" },
        { char: "盛", pinyin: "sheng4", definition: "abundant" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "舅", pinyin: "jiu4", definition: "aunt" },
        { char: "妈", pinyin: "ma1", definition: "aunt" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "墙", pinyin: "qiang2", definition: "wall" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "贴", pinyin: "tie1", definition: "to paste" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "字", pinyin: "zi4", definition: "character" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "还", pinyin: "hai2", definition: "also" },
        { char: "特", pinyin: "te4", definition: "specially" },
        { char: "意", pinyin: "yi4", definition: "specially" },
        { char: "把", pinyin: "ba3", definition: "marker" },
        { char: "它", pinyin: "ta1", definition: "it" },
        { char: "倒", pinyin: "dao4", definition: "upside down" },
        { char: "过", pinyin: "guo4", definition: "marker" },
        { char: "来", pinyin: "lai2", definition: "marker" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "说", pinyin: "shuo1", definition: "to say" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "样", pinyin: "yang4", definition: "manner" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "到", pinyin: "dao4", definition: "arrived" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "意", pinyin: "yi4", definition: "meaning" },
        { char: "思", pinyin: "si0", definition: "meaning" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "举", pinyin: "ju3", definition: "to lift" },
        { char: "起", pinyin: "qi3", definition: "up" },
        { char: "酒", pinyin: "jiu3", definition: "alcohol" },
        { char: "杯", pinyin: "bei1", definition: "cup" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "干", pinyin: "gan1", definition: "to toast" },
        { char: "杯", pinyin: "bei1", definition: "to toast" },
        { char: "庆", pinyin: "qing4", definition: "celebrate" },
        { char: "祝", pinyin: "zhu4", definition: "celebrate" },
        { char: "顺", pinyin: "shun4", definition: "smooth" },
        { char: "利", pinyin: "li4", definition: "smooth" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "农", pinyin: "nong2", definition: "lunar calendar" },
        { char: "历", pinyin: "li4", definition: "lunar calendar" },
        { char: "正", pinyin: "zheng1", definition: "first month" },
        { char: "月", pinyin: "yue4", definition: "first month" },
        { char: "十", pinyin: "shi2", definition: "ten" },
        { char: "五", pinyin: "wu3", definition: "five" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "元", pinyin: "yuan2", definition: "Lantern Festival" },
        { char: "宵", pinyin: "xiao1", definition: "Lantern Festival" },
        { char: "节", pinyin: "jie2", definition: "Lantern Festival" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "小", pinyin: "xiao3", definition: "residential complex" },
        { char: "区", pinyin: "qu1", definition: "residential complex" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "挂", pinyin: "gua4", definition: "to hang" },
        { char: "满", pinyin: "man3", definition: "full" },
        { char: "灯", pinyin: "deng1", definition: "lantern" },
        { char: "笼", pinyin: "long2", definition: "lantern" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "环", pinyin: "huan2", definition: "environment" },
        { char: "境", pinyin: "jing4", definition: "environment" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "特", pinyin: "te4", definition: "especially" },
        { char: "别", pinyin: "bie2", definition: "especially" },
        { char: "热", pinyin: "re4", definition: "lively" },
        { char: "闹", pinyin: "nao0", definition: "lively" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "晚", pinyin: "wan3", definition: "evening gathering" },
        { char: "会", pinyin: "hui4", definition: "evening gathering" },
        { char: "上", pinyin: "shang4", definition: "at" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "一", pinyin: "yi1", definition: "together" },
        { char: "起", pinyin: "qi3", definition: "together" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "元", pinyin: "yuan2", definition: "sweet dumplings" },
        { char: "宵", pinyin: "xiao1", definition: "sweet dumplings" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "中", pinyin: "zhong1", definition: "China" },
        { char: "国", pinyin: "guo2", definition: "China" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "传", pinyin: "chuan2", definition: "tradition" },
        { char: "统", pinyin: "tong3", definition: "tradition" },
        { char: "嘛", pinyin: "ma0", definition: "particle" },
        { char: "！", pinyin: "！", definition: "punctuation" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "成", pinyin: "cheng2", definition: "success" },
        { char: "功", pinyin: "gong1", definition: "success" },
        { char: "发", pinyin: "fa1", definition: "get rich" },
        { char: "财", pinyin: "cai2", definition: "get rich" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "中", pinyin: "zhong1", definition: "Mid-Autumn" },
        { char: "秋", pinyin: "qiu1", definition: "Mid-Autumn" },
        { char: "节", pinyin: "jie2", definition: "Mid-Autumn" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "个", pinyin: "ge4", definition: "measure" },
        { char: "团", pinyin: "tuan2", definition: "reunion" },
        { char: "圆", pinyin: "yuan2", definition: "reunion" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "节", pinyin: "jie2", definition: "holiday" },
        { char: "日", pinyin: "ri4", definition: "holiday" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "看", pinyin: "kan4", definition: "see" },
        { char: "到", pinyin: "dao4", definition: "result" },
        { char: "桌", pinyin: "zhuo1", definition: "table" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "剩", pinyin: "sheng4", definition: "left over" },
        { char: "下", pinyin: "xia4", definition: "left over" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "少", pinyin: "shao3", definition: "few" },
        { char: "月", pinyin: "yue4", definition: "moon cake" },
        { char: "饼", pinyin: "bing3", definition: "moon cake" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "觉", pinyin: "jue2", definition: "feel" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "浪", pinyin: "lang4", definition: "waste" },
        { char: "费", pinyin: "fei4", definition: "waste" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "多", pinyin: "duo1", definition: "more" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "点", pinyin: "dian3", definition: "bit" },
        { char: "儿", pinyin: "er2", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "因", pinyin: "yin1", definition: "because" },
        { char: "为", pinyin: "wei4", definition: "because" },
        { char: "“", pinyin: "“", definition: "punctuation" },
        { char: "余", pinyin: "yu2", definition: "surplus" },
        { char: "”", pinyin: "”", definition: "punctuation" },
        { char: "代", pinyin: "dai4", definition: "replace" },
        { char: "表", pinyin: "biao3", definition: "show" },
        { char: "富", pinyin: "fu4", definition: "rich" },
        { char: "足", pinyin: "zu2", definition: "enough" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "端", pinyin: "duan1", definition: "Dragon Boat" },
        { char: "午", pinyin: "wu3", definition: "Dragon Boat" },
        { char: "节", pinyin: "jie2", definition: "Dragon Boat" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "看", pinyin: "kan4", definition: "watch" },
        { char: "到", pinyin: "dao4", definition: "result" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "粽", pinyin: "zong4", definition: "sticky-rice dumpling" },
        { char: "子", pinyin: "zi0", definition: "sticky-rice dumpling" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "点", pinyin: "dian3", definition: "bit" },
        { char: "儿", pinyin: "er2", definition: "particle" },
        { char: "奇", pinyin: "qi2", definition: "strange" },
        { char: "怪", pinyin: "guai4", definition: "strange" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "以", pinyin: "yi3", definition: "with" },
        { char: "茶", pinyin: "cha2", definition: "tea" },
        { char: "代", pinyin: "dai4", definition: "replace" },
        { char: "酒", pinyin: "jiu3", definition: "alcohol" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "向", pinyin: "xiang4", definition: "towards" },
        { char: "长", pinyin: "zhang3", definition: "elder" },
        { char: "辈", pinyin: "bei4", definition: "elder" },
        { char: "举", pinyin: "jǔ", definition: "lift" },
        { char: "杯", pinyin: "bei1", definition: "cup" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "他", pinyin: "ta1", definition: "him" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "学", pinyin: "xue2", definition: "study" },
        { char: "习", pinyin: "xi2", definition: "study" },
        { char: "进", pinyin: "jin4", definition: "progress" },
        { char: "步", pinyin: "bu4", definition: "progress" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "春", pinyin: "chun1", definition: "Spring Festival" },
        { char: "节", pinyin: "jie2", definition: "Spring Festival" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "午", pinyin: "wu3", definition: "noon" },
        { char: "夜", pinyin: "ye4", definition: "night" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "开", pinyin: "kai1", definition: "start" },
        { char: "始", pinyin: "shi3", definition: "start" },
        { char: "计", pinyin: "ji4", definition: "count time" },
        { char: "时", pinyin: "shi2", definition: "count time" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "外", pinyin: "wai4", definition: "outside" },
        { char: "面", pinyin: "mian4", definition: "face" },
        { char: "响", pinyin: "xiang3", definition: "sound" },
        { char: "起", pinyin: "qi3", definition: "up" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "鞭", pinyin: "bian1", definition: "firecracker" },
        { char: "炮", pinyin: "pao4", definition: "firecracker" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "小", pinyin: "xiao3", definition: "small" },
        { char: "孩", pinyin: "hai2", definition: "child" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "排", pinyin: "pai2", definition: "row" },
        { char: "队", pinyin: "dui4", definition: "line" },
        { char: "拜", pinyin: "bai4", definition: "pay call" },
        { char: "年", pinyin: "nian2", definition: "pay call" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "领", pinyin: "ling3", definition: "receive" },
        { char: "取", pinyin: "qu3", definition: "receive" },
        { char: "红", pinyin: "hong2", definition: "red envelope" },
        { char: "包", pinyin: "bao1", definition: "red envelope" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "场", pinyin: "chang3", definition: "scene" },
        { char: "面", pinyin: "mian4", definition: "scene" },
        { char: "十", pinyin: "shi2", definition: "ten" },
        { char: "分", pinyin: "fen1", definition: "points" },
        { char: "热", pinyin: "re4", definition: "lively" },
        { char: "闹", pinyin: "nao0", definition: "lively" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "感", pinyin: "gan3", definition: "Thanksgiving" },
        { char: "恩", pinyin: "en1", definition: "Thanksgiving" },
        { char: "节", pinyin: "jie2", definition: "Thanksgiving" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "妈", pinyin: "ma1", definition: "aunt" },
        { char: "家", pinyin: "jia1", definition: "house" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "传", pinyin: "chuan2", definition: "tradition" },
        { char: "统", pinyin: "tong3", definition: "tradition" },
        { char: "农", pinyin: "nong2", definition: "lunar" },
        { char: "历", pinyin: "li4", definition: "calendar" },
        { char: "节", pinyin: "jie2", definition: "holiday" },
        { char: "日", pinyin: "ri4", definition: "holiday" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "聚", pinyin: "ju4", definition: "gather" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "起", pinyin: "qi3", definition: "together" },
        { char: "干", pinyin: "gan1", definition: "toast" },
        { char: "杯", pinyin: "bei1", definition: "toast" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "万", pinyin: "wan4", definition: "ten thousand" },
        { char: "事", pinyin: "shi4", definition: "things" },
        { char: "顺", pinyin: "shun4", definition: "smooth" },
        { char: "利", pinyin: "li4", definition: "smooth" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "学", pinyin: "xue2", definition: "study" },
        { char: "业", pinyin: "ye4", definition: "studies" },
        { char: "成", pinyin: "cheng2", definition: "success" },
        { char: "功", pinyin: "gong1", definition: "success" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "除", pinyin: "chu2", definition: "CNY Eve" },
        { char: "夕", pinyin: "xi1", definition: "CNY Eve" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "晚", pinyin: "wan3", definition: "evening gathering" },
        { char: "会", pinyin: "hui4", definition: "evening gathering" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "意", pinyin: "yi4", definition: "meaning" },
        { char: "思", pinyin: "si0", definition: "meaning" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "看", pinyin: "kan4", definition: "watch" },
        { char: "见", pinyin: "jian4", definition: "result" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "正", pinyin: "zheng4", definition: "currently" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "小", pinyin: "xiao3", definition: "small" },
        { char: "区", pinyin: "qu1", definition: "area" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "邻", pinyin: "lin2", definition: "neighbor" },
        { char: "居", pinyin: "ju1", definition: "neighbor" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "拜", pinyin: "bai4", definition: "pay call" },
        { char: "年", pinyin: "nian2", definition: "pay call" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "举", pinyin: "ju3", definition: "lifts" },
        { char: "起", pinyin: "qi3", definition: "up" },
        { char: "手", pinyin: "shou3", definition: "hand" },
        { char: "说", pinyin: "shuo1", definition: "say" },
        { char: "恭", pinyin: "gong1", definition: "congratulate" },
        { char: "喜", pinyin: "xi3", definition: "congratulate" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "余", pinyin: "yu2", definition: "surplus" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "节", pinyin: "jie2", definition: "holiday" },
        { char: "日", pinyin: "ri4", definition: "holiday" },
        { char: "过", pinyin: "guo4", definition: "passed" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "墙", pinyin: "qiang2", definition: "wall" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "贴", pinyin: "tie1", definition: "pasted" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "字", pinyin: "zi4", definition: "character" },
        { char: "还", pinyin: "hai2", definition: "still" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "那", pinyin: "na4", definition: "there" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "浪", pinyin: "lang4", definition: "waste" },
        { char: "费", pinyin: "fei4", definition: "waste" },
        { char: "时", pinyin: "shi2", definition: "time" },
        { char: "间", pinyin: "jian1", definition: "time" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "努", pinyin: "nu3", definition: "strive" },
        { char: "力", pinyin: "li4", definition: "strive" },
        { char: "进", pinyin: "jin4", definition: "progress" },
        { char: "步", pinyin: "bu4", definition: "progress" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "争", pinyin: "zheng1", definition: "strive" },
        { char: "取", pinyin: "qu3", definition: "get" },
        { char: "早", pinyin: "zao3", definition: "early" },
        { char: "日", pinyin: "ri4", definition: "day" },
        { char: "成", pinyin: "cheng2", definition: "success" },
        { char: "功", pinyin: "gong1", definition: "success" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "才", pinyin: "cai2", definition: "only then" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "生", pinyin: "sheng1", definition: "life" },
        { char: "活", pinyin: "huo2", definition: "life" },
        { char: "嘛", pinyin: "ma0", definition: "particle" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "农", pinyin: "nong2", definition: "lunar" },
        { char: "历", pinyin: "li4", definition: "calendar" },
        { char: "正", pinyin: "zheng1", definition: "first month" },
        { char: "月", pinyin: "yue4", definition: "first month" },
        { char: "初", pinyin: "chu1", definition: "early" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "整", pinyin: "zheng3", definition: "entire" },
        { char: "个", pinyin: "ge4", definition: "measure" },
        { char: "小", pinyin: "xiao3", definition: "residential complex" },
        { char: "区", pinyin: "qu1", definition: "residential complex" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "热", pinyin: "re4", definition: "lively" },
        { char: "闹", pinyin: "nao0", definition: "lively" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "以", pinyin: "yi3", definition: "with" },
        { char: "欢", pinyin: "huan1", definition: "happy" },
        { char: "笑", pinyin: "xiao4", definition: "laugh" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "代", pinyin: "dai4", definition: "replace" },
        { char: "替", pinyin: "ti4", definition: "substitute" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "鞭", pinyin: "bian1", definition: "firecracker" },
        { char: "炮", pinyin: "pao4", definition: "firecracker" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "舅", pinyin: "jiu4", definition: "uncle" },
        { char: "举", pinyin: "ju3", definition: "lifts" },
        { char: "杯", pinyin: "bei1", definition: "cup" },
        { char: "祝", pinyin: "zhu4", definition: "wish" },
        { char: "福", pinyin: "fu2", definition: "blessing" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "学", pinyin: "xue2", definition: "studies" },
        { char: "业", pinyin: "ye4", definition: "studies" },
        { char: "顺", pinyin: "shun4", definition: "smooth" },
        { char: "利", pinyin: "li4", definition: "smooth" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "恭", pinyin: "gong1", definition: "congratulate" },
        { char: "喜", pinyin: "xi3", definition: "congratulate" },
        { char: "他", pinyin: "ta1", definition: "him" },
        { char: "发", pinyin: "fa1", definition: "get rich" },
        { char: "财", pinyin: "cai2", definition: "get rich" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "元", pinyin: "yuan2", definition: "Lantern Festival" },
        { char: "宵", pinyin: "xiao1", definition: "Lantern Festival" },
        { char: "节", pinyin: "jie2", definition: "Lantern Festival" },
        { char: "晚", pinyin: "wan3", definition: "evening gathering" },
        { char: "会", pinyin: "hui4", definition: "evening gathering" },
        { char: "结", pinyin: "jie2", definition: "finish" },
        { char: "束", pinyin: "shu4", definition: "finish" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "桌", pinyin: "zhuo1", definition: "table" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "还", pinyin: "hai2", definition: "still" },
        { char: "剩", pinyin: "sheng4", definition: "left over" },
        { char: "下", pinyin: "xia4", definition: "left over" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "些", pinyin: "xie1", definition: "some" },
        { char: "元", pinyin: "yuan2", definition: "sweet dumplings" },
        { char: "宵", pinyin: "xiao1", definition: "sweet dumplings" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "问", pinyin: "wen4", definition: "ask" },
        { char: "舅", pinyin: "jiu4", definition: "aunt" },
        { char: "妈", pinyin: "ma1", definition: "aunt" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "什", pinyin: "shen2", definition: "what" },
        { char: "么", pinyin: "me0", definition: "what" },
        { char: "意", pinyin: "yi4", definition: "meaning" },
        { char: "思", pinyin: "si0", definition: "meaning" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "她", pinyin: "ta1", definition: "she" },
        { char: "笑", pinyin: "xiao4", definition: "laugh" },
        { char: "着", pinyin: "zhe0", definition: "particle" },
        { char: "说", pinyin: "shuo1", definition: "say" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "浪", pinyin: "lang4", definition: "waste" },
        { char: "费", pinyin: "fei4", definition: "waste" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "而", pinyin: "er2", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "传", pinyin: "chuan2", definition: "tradition" },
        { char: "统", pinyin: "tong3", definition: "tradition" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "“", pinyin: "“", definition: "punctuation" },
        { char: "余", pinyin: "yu2", definition: "surplus" },
        { char: "”", pinyin: "”", definition: "punctuation" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
  },
  change: {
    easy: [
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "变", pinyin: "bian4", definition: "to change" },
        { char: "化", pinyin: "hua4", definition: "to change" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "老", pinyin: "lao3", definition: "foreigner" },
        { char: "外", pinyin: "wai4", definition: "foreigner" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "表", pinyin: "biao3", definition: "older male cousin" },
        { char: "哥", pinyin: "ge1", definition: "older male cousin" },
        { char: "骑", pinyin: "qi2", definition: "to ride" },
        { char: "自", pinyin: "zi4", definition: "bicycle" },
        { char: "行", pinyin: "xing2", definition: "bicycle" },
        { char: "车", pinyin: "che1", definition: "bicycle" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "上", pinyin: "shang4", definition: "to go to work" },
        { char: "班", pinyin: "ban1", definition: "to go to work" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "爱", pinyin: "ai4", definition: "love" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "小", pinyin: "xiao3", definition: "small dishes" },
        { char: "吃", pinyin: "chi1", definition: "small dishes" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "哈", pinyin: "ha1", definition: "laughter" },
        { char: "哈", pinyin: "ha1", definition: "laughter" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "坐", pinyin: "zuo4", definition: "to sit/take" },
        { char: "高", pinyin: "gao1", definition: "high-speed rail" },
        { char: "铁", pinyin: "tie3", definition: "high-speed rail" },
        { char: "回", pinyin: "hui2", definition: "return" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "no matter" },
        { char: "管", pinyin: "guan3", definition: "no matter" },
        { char: "多", pinyin: "duo1", definition: "how" },
        { char: "远", pinyin: "yuan3", definition: "far" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "对", pinyin: "dui4", definition: "opposite side" },
        { char: "面", pinyin: "mian4", definition: "opposite side" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "座", pinyin: "zuo4", definition: "measure word" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "厦", pinyin: "sha4", definition: "mansion" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "建", pinyin: "jian4", definition: "architecture" },
        { char: "筑", pinyin: "zhu4", definition: "architecture" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "周", pinyin: "zhou1", definition: "week" },
        { char: "末", pinyin: "mo4", definition: "end" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "买", pinyin: "mai3", definition: "buy" },
        { char: "服", pinyin: "fu2", definition: "clothing" },
        { char: "装", pinyin: "zhuang1", definition: "clothing" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "快", pinyin: "kuai4", definition: "fast food" },
        { char: "餐", pinyin: "can1", definition: "fast food" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "拍", pinyin: "pai1", definition: "to take a picture" },
        { char: "画", pinyin: "hua4", definition: "picture" },
        { char: "面", pinyin: "mian4", definition: "scene" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "here" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "特", pinyin: "te4", definition: "characteristic" },
        { char: "色", pinyin: "se4", definition: "characteristic" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "听", pinyin: "ting1", definition: "listen" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "什", pinyin: "shen2", definition: "what" },
        { char: "么", pinyin: "me0", definition: "what" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "？", pinyin: "？", definition: "punctuation" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "老", pinyin: "lao3", definition: "ordinary people" },
        { char: "百", pinyin: "bai3", definition: "ordinary people" },
        { char: "姓", pinyin: "xing4", definition: "ordinary people" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "脚", pinyin: "jiao3", definition: "footstep" },
        { char: "步", pinyin: "bu4", definition: "footstep" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "从", pinyin: "cong2", definition: "always" },
        { char: "来", pinyin: "lai2", definition: "always" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "肉", pinyin: "rou4", definition: "meat" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "尽", pinyin: "jin3", definition: "as much as possible" },
        { char: "可", pinyin: "ke3", definition: "as much as possible" },
        { char: "能", pinyin: "neng2", definition: "as much as possible" },
        { char: "多", pinyin: "duo1", definition: "more" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "菜", pinyin: "cai4", definition: "vegetables" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "火", pinyin: "huo3", definition: "train" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "开", pinyin: "kai1", definition: "drive" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "来", pinyin: "lai2", definition: "too late" },
        { char: "不", pinyin: "bu4", definition: "too late" },
        { char: "及", pinyin: "ji2", definition: "too late" },
        { char: "上", pinyin: "shang4", definition: "go up" },
        { char: "车", pinyin: "che1", definition: "car" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "难", pinyin: "nan2", definition: "hard" },
        { char: "过", pinyin: "guo4", definition: "sad" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
    medium: [
      [
        { char: "要", pinyin: "yao4", definition: "if it were not for" },
        { char: "不", pinyin: "bu4", definition: "if it were not for" },
        { char: "是", pinyin: "shi4", definition: "if it were not for" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "高", pinyin: "gao1", definition: "high-speed rail" },
        { char: "铁", pinyin: "tie3", definition: "high-speed rail" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "就", pinyin: "jiu4", definition: "then" },
        { char: "来", pinyin: "lai2", definition: "too late" },
        { char: "不", pinyin: "bu4", definition: "too late" },
        { char: "及", pinyin: "ji2", definition: "too late" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "上", pinyin: "shang4", definition: "to start work" },
        { char: "班", pinyin: "ban1", definition: "to start work" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "表", pinyin: "biao3", definition: "older male cousin" },
        { char: "哥", pinyin: "ge1", definition: "older male cousin" },
        { char: "从", pinyin: "cong2", definition: "always" },
        { char: "来", pinyin: "lai2", definition: "always" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "骑", pinyin: "qi2", definition: "to ride" },
        { char: "自", pinyin: "zi4", definition: "bicycle" },
        { char: "行", pinyin: "xing2", definition: "bicycle" },
        { char: "车", pinyin: "che1", definition: "bicycle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "开", pinyin: "kai1", definition: "to drive" },
        { char: "车", pinyin: "che1", definition: "car" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "大", pinyin: "da4", definition: "street" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "对", pinyin: "dui4", definition: "opposite side" },
        { char: "面", pinyin: "mian4", definition: "opposite side" },
        { char: "新", pinyin: "xin1", definition: "new" },
        { char: "盖", pinyin: "gai4", definition: "to build" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "座", pinyin: "zuo4", definition: "measure word" },
        { char: "大", pinyin: "da4", definition: "tall building" },
        { char: "厦", pinyin: "sha4", definition: "tall building" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "建", pinyin: "jian4", definition: "architecture" },
        { char: "筑", pinyin: "zhu4", definition: "architecture" },
        { char: "很有", pinyin: "hen3 you3", definition: "very have" },
        { char: "特", pinyin: "te4", definition: "characteristic" },
        { char: "色", pinyin: "se4", definition: "characteristic" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "老", pinyin: "lao3", definition: "foreigner" },
        { char: "外", pinyin: "wai4", definition: "foreigner" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "拍", pinyin: "pai1", definition: "to take a picture" },
        { char: "照", pinyin: "zhao4", definition: "photo" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "城", pinyin: "cheng2", definition: "city" },
        { char: "市", pinyin: "shi4", definition: "city" },
        { char: "在", pinyin: "zai4", definition: "is" },
        { char: "变", pinyin: "bian4", definition: "to change" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "老", pinyin: "lao3", definition: "ordinary people" },
        { char: "百", pinyin: "bai3", definition: "ordinary people" },
        { char: "姓", pinyin: "xing4", definition: "ordinary people" },
        { char: "尽", pinyin: "jin3", definition: "as much as possible" },
        { char: "可", pinyin: "ke3", definition: "as much as possible" },
        { char: "能", pinyin: "neng2", definition: "as much as possible" },
        { char: "保", pinyin: "bao3", definition: "to retain" },
        { char: "留", pinyin: "liu2", definition: "to retain" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "老", pinyin: "lao3", definition: "old" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "听", pinyin: "ting1", definition: "to listen" },
        { char: "到", pinyin: "dao4", definition: "result" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "旧", pinyin: "jiu4", definition: "old" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "各", pinyin: "ge4", definition: "various" },
        { char: "地", pinyin: "di4", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "小", pinyin: "xiao3", definition: "snacks" },
        { char: "吃", pinyin: "chi1", definition: "snacks" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "regardless of" },
        { char: "管", pinyin: "guan3", definition: "regardless of" },
        { char: "多", pinyin: "duo1", definition: "how" },
        { char: "远", pinyin: "yuan3", definition: "far" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "试", pinyin: "shi4", definition: "to try" },
        { char: "试", pinyin: "shi4", definition: "to try" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        {
          char: "民",
          pinyin: "min2",
          definition: "food is as important as heaven",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "food is as important as heaven",
        },
        {
          char: "食",
          pinyin: "shi2",
          definition: "food is as important as heaven",
        },
        {
          char: "为",
          pinyin: "wei2",
          definition: "food is as important as heaven",
        },
        {
          char: "天",
          pinyin: "tian1",
          definition: "food is as important as heaven",
        },
        { char: "嘛", pinyin: "ma0", definition: "particle" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "末", pinyin: "mo4", definition: "end" },
        { char: "到", pinyin: "dao4", definition: "arrive" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "买", pinyin: "mai3", definition: "to buy" },
        { char: "新", pinyin: "xin1", definition: "new" },
        { char: "服", pinyin: "fu2", definition: "clothing" },
        { char: "装", pinyin: "zhuang1", definition: "clothing" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "融", pinyin: "rong2", definition: "to merge into" },
        { char: "入", pinyin: "ru4", definition: "to merge into" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "生", pinyin: "sheng1", definition: "life" },
        { char: "活", pinyin: "huo2", definition: "life" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "imagine" },
        { char: "像", pinyin: "xiang4", definition: "imagine" },
        { char: "法", pinyin: "fa3", definition: "France" },
        { char: "国", pinyin: "guo2", definition: "France" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "脚", pinyin: "jiao3", definition: "footstep" },
        { char: "步", pinyin: "bu4", definition: "footstep" },
        { char: "一", pinyin: "yi1", definition: "always" },
        { char: "定", pinyin: "ding4", definition: "surely" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "哈", pinyin: "ha1", definition: "laughter" },
        { char: "哈", pinyin: "ha1", definition: "laughter" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "对", pinyin: "dui4", definition: "correct" },
        { char: "吧", pinyin: "ba0", definition: "particle" },
        { char: "？", pinyin: "？", definition: "punctuation" },
      ],
      [
        { char: "夫", pinyin: "fu1", definition: "Temple of Confucius" },
        { char: "子", pinyin: "zi3", definition: "Temple of Confucius" },
        { char: "庙", pinyin: "miao4", definition: "Temple of Confucius" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "特", pinyin: "te4", definition: "characteristic" },
        { char: "色", pinyin: "se4", definition: "characteristic" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "那", pinyin: "na4", definition: "there" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "小", pinyin: "xiao3", definition: "snacks" },
        { char: "吃", pinyin: "chi1", definition: "snacks" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "句", pinyin: "ju4", definition: "measure word" },
        { char: "话", pinyin: "hua4", definition: "speech" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "对", pinyin: "dui4", definition: "right" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "肚", pinyin: "du4", definition: "stomach" },
        { char: "子", pinyin: "zi0", definition: "stomach" },
        { char: "咕", pinyin: "gu1", definition: "rumbling sound" },
        { char: "噜", pinyin: "lu1", definition: "rumbling sound" },
        { char: "地", pinyin: "de0", definition: "particle" },
        { char: "响", pinyin: "xiang3", definition: "sound" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "对", pinyin: "dui4", definition: "opposite side" },
        { char: "面", pinyin: "mian4", definition: "opposite side" },
        { char: "买", pinyin: "mai3", definition: "to buy" },
        { char: "快", pinyin: "kuai4", definition: "fast food" },
        { char: "餐", pinyin: "can1", definition: "fast food" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "regardless of" },
        { char: "管", pinyin: "guan3", definition: "regardless of" },
        { char: "什", pinyin: "shen2", definition: "what" },
        { char: "么", pinyin: "me0", definition: "what" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "行", pinyin: "xing2", definition: "okay" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "here" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "建", pinyin: "jian4", definition: "architecture" },
        { char: "筑", pinyin: "zhu4", definition: "architecture" },
        { char: "变", pinyin: "bian4", definition: "to change" },
        { char: "化", pinyin: "hua4", definition: "to change" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "尽", pinyin: "jin3", definition: "as much as possible" },
        { char: "可", pinyin: "ke3", definition: "as much as possible" },
        { char: "能", pinyin: "neng2", definition: "as much as possible" },
        { char: "多", pinyin: "duo1", definition: "more" },
        { char: "拍", pinyin: "pai1", definition: "to take a picture" },
        { char: "照", pinyin: "zhao4", definition: "photo" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "保", pinyin: "bao3", definition: "to retain" },
        { char: "留", pinyin: "liu2", definition: "to retain" },
        { char: "回", pinyin: "hui2", definition: "return" },
        { char: "忆", pinyin: "yi4", definition: "memory" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],

    hard: [
      [
        { char: "要", pinyin: "yao4", definition: "if it were not for" },
        { char: "不", pinyin: "bu4", definition: "if it were not for" },
        { char: "是", pinyin: "shi4", definition: "if it were not for" },
        { char: "表", pinyin: "biao3", definition: "older male cousin" },
        { char: "哥", pinyin: "ge1", definition: "older male cousin" },
        { char: "带", pinyin: "dai4", definition: "to bring" },
        { char: "我", pinyin: "wo3", definition: "me" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "坐", pinyin: "zuo4", definition: "to take" },
        { char: "高", pinyin: "gao1", definition: "high-speed rail" },
        { char: "铁", pinyin: "tie3", definition: "high-speed rail" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "来", pinyin: "lai2", definition: "to not have enough time" },
        { char: "不", pinyin: "bu4", definition: "to not have enough time" },
        { char: "及", pinyin: "ji2", definition: "to not have enough time" },
        { char: "想", pinyin: "xiang3", definition: "to imagine" },
        { char: "像", pinyin: "xiang4", definition: "to imagine" },
        { char: "城", pinyin: "cheng2", definition: "city" },
        { char: "市", pinyin: "shi4", definition: "city" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "翻", pinyin: "fan1", definition: "multiply" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "覆", pinyin: "fu4", definition: "overturn" },
        { char: "地", pinyin: "di4", definition: "ground" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "对", pinyin: "dui4", definition: "opposite side" },
        { char: "面", pinyin: "mian4", definition: "opposite side" },
        { char: "新", pinyin: "xin1", definition: "new" },
        { char: "盖", pinyin: "gai4", definition: "to build" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "座", pinyin: "zuo4", definition: "measure word" },
        { char: "大", pinyin: "da4", definition: "mansion" },
        { char: "厦", pinyin: "sha4", definition: "mansion" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "各", pinyin: "ge4", definition: "each" },
        { char: "种", pinyin: "zhong3", definition: "kind" },
        { char: "服", pinyin: "fu2", definition: "clothing" },
        { char: "装", pinyin: "zhuang1", definition: "clothing" },
        { char: "店", pinyin: "dian4", definition: "shop" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "南", pinyin: "nan2", definition: "south" },
        { char: "京", pinyin: "jing1", definition: "capital" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "夫", pinyin: "fu1", definition: "Temple of Confucius" },
        { char: "子", pinyin: "zi3", definition: "Temple of Confucius" },
        { char: "庙", pinyin: "miao4", definition: "Temple of Confucius" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "regardless of" },
        { char: "管", pinyin: "guan3", definition: "regardless of" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "老", pinyin: "lao3", definition: "foreigner" },
        { char: "外", pinyin: "wai4", definition: "foreigner" },
        { char: "还", pinyin: "hai2", definition: "still" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "本", pinyin: "ben3", definition: "local" },
        { char: "地", pinyin: "di4", definition: "place" },
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "特", pinyin: "te4", definition: "characteristic" },
        { char: "色", pinyin: "se4", definition: "characteristic" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "小", pinyin: "xiao3", definition: "snacks" },
        { char: "吃", pinyin: "chi1", definition: "snacks" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "“", pinyin: "“", definition: "punctuation" },
        {
          char: "民",
          pinyin: "min2",
          definition: "food is as important as heaven",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "food is as important as heaven",
        },
        {
          char: "食",
          pinyin: "shi2",
          definition: "food is as important as heaven",
        },
        {
          char: "为",
          pinyin: "wei2",
          definition: "food is as important as heaven",
        },
        {
          char: "天",
          pinyin: "tian1",
          definition: "food is as important as heaven",
        },
        { char: "”", pinyin: "”", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "句", pinyin: "ju4", definition: "measure word" },
        { char: "话", pinyin: "hua4", definition: "words" },
        { char: "说", pinyin: "shuo1", definition: "to say" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "真", pinyin: "zhen1", definition: "truly" },
        { char: "对", pinyin: "dui4", definition: "right" },
        { char: "哈", pinyin: "ha1", definition: "laughter" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "从", pinyin: "cong2", definition: "from past till present" },
        { char: "来", pinyin: "lai2", definition: "from past till present" },
        { char: "没", pinyin: "mei2", definition: "not" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "见", pinyin: "jian4", definition: "see" },
        { char: "过", pinyin: "guo4", definition: "aspect marker" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "样", pinyin: "yang4", definition: "kind" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "建", pinyin: "jian4", definition: "architecture" },
        { char: "筑", pinyin: "zhu4", definition: "architecture" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "它", pinyin: "ta1", definition: "it" },
        { char: "完", pinyin: "wan2", definition: "completely" },
        { char: "美", pinyin: "mei3", definition: "beautifully" },
        { char: "地", pinyin: "de0", definition: "adverbial marker" },
        { char: "融", pinyin: "rong2", definition: "to merge into" },
        { char: "入", pinyin: "ru4", definition: "to merge into" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "当", pinyin: "dang1", definition: "local" },
        { char: "地", pinyin: "di4", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "文", pinyin: "wen2", definition: "culture" },
        { char: "化", pinyin: "hua4", definition: "culture" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "老", pinyin: "lao3", definition: "ordinary people" },
        { char: "百", pinyin: "bai3", definition: "ordinary people" },
        { char: "姓", pinyin: "xing4", definition: "ordinary people" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "尽", pinyin: "jin3", definition: "as much as possible" },
        { char: "可", pinyin: "ke3", definition: "as much as possible" },
        { char: "能", pinyin: "neng2", definition: "as much as possible" },
        { char: "地", pinyin: "de0", definition: "adverbial marker" },
        { char: "保", pinyin: "bao3", definition: "to retain" },
        { char: "留", pinyin: "liu2", definition: "to retain" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "样", pinyin: "yang4", definition: "appearance" },
        { char: "子", pinyin: "zi0", definition: "appearance" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "下", pinyin: "xia4", definition: "after" },
        { char: "班", pinyin: "ban1", definition: "work" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "道", pinyin: "dao4", definition: "street" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "骑", pinyin: "qi2", definition: "to ride" },
        { char: "自", pinyin: "zi4", definition: "bicycle" },
        { char: "行", pinyin: "xing2", definition: "bicycle" },
        { char: "车", pinyin: "che1", definition: "bicycle" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "潮", pinyin: "chao2", definition: "tide" },
        { char: "发", pinyin: "fa1", definition: "emit" },
        { char: "出", pinyin: "chu1", definition: "out" },
        { char: "各种", pinyin: "ge4 zhong3", definition: "various" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "肚", pinyin: "du4", definition: "stomach" },
        { char: "子", pinyin: "zi0", definition: "stomach" },
        { char: "饿", pinyin: "e4", definition: "hungry" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "咕", pinyin: "gu1", definition: "rumbling sound" },
        { char: "噜", pinyin: "lu1", definition: "rumbling sound" },
        { char: "直", pinyin: "zhi2", definition: "continuously" },
        { char: "响", pinyin: "xiang3", definition: "to sound" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "点", pinyin: "dian3", definition: "a bit" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "买", pinyin: "mai3", definition: "buy" },
        { char: "份", pinyin: "fen4", definition: "measure word" },
        { char: "快", pinyin: "kuai4", definition: "fast food" },
        { char: "餐", pinyin: "can1", definition: "fast food" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "吧", pinyin: "ba0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "法", pinyin: "fa3", definition: "France" },
        { char: "国", pinyin: "guo2", definition: "France" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "拍", pinyin: "pai1", definition: "to take a picture" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "独", pinyin: "du2", definition: "unique" },
        { char: "特", pinyin: "te4", definition: "unique" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "建", pinyin: "jian4", definition: "architecture" },
        { char: "筑", pinyin: "zhu4", definition: "architecture" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "道", pinyin: "dao4", definition: "street" },
        { char: "两", pinyin: "liang3", definition: "two" },
        { char: "边", pinyin: "bian1", definition: "sides" },
        { char: "盖", pinyin: "gai4", definition: "built" },
        { char: "起", pinyin: "qi3", definition: "up" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "现", pinyin: "xian4", definition: "modern" },
        { char: "代", pinyin: "dai4", definition: "modern" },
        { char: "化", pinyin: "hua4", definition: "modern" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "大", pinyin: "da4", definition: "mansion" },
        { char: "厦", pinyin: "sha4", definition: "mansion" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "城", pinyin: "cheng2", definition: "city" },
        { char: "市", pinyin: "shi4", definition: "city" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "脚", pinyin: "jiao3", definition: "footstep" },
        { char: "步", pinyin: "bu4", definition: "footstep" },
        { char: "变", pinyin: "bian4", definition: "to change" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "越", pinyin: "yue4", definition: "more" },
        { char: "来", pinyin: "lai2", definition: "more" },
        { char: "越", pinyin: "yue4", definition: "more" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "周", pinyin: "zhou1", definition: "week" },
        { char: "末", pinyin: "mo4", definition: "end" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "陪", pinyin: "pei2", definition: "accompany" },
        { char: "表", pinyin: "biao3", definition: "older male cousin" },
        { char: "哥", pinyin: "ge1", definition: "older male cousin" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "买", pinyin: "mai3", definition: "to buy" },
        { char: "服", pinyin: "fu2", definition: "clothing" },
        { char: "装", pinyin: "zhuang1", definition: "clothing" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "对", pinyin: "dui4", definition: "opposite side" },
        { char: "面", pinyin: "mian4", definition: "opposite side" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "快", pinyin: "kuai4", definition: "fast food" },
        { char: "餐", pinyin: "can1", definition: "fast food" },
        { char: "店", pinyin: "dian4", definition: "shop" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "坐", pinyin: "zuo4", definition: "sit" },
        { char: "满", pinyin: "man3", definition: "full" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "老", pinyin: "lao3", definition: "foreigner" },
        { char: "外", pinyin: "wai4", definition: "foreigner" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "城", pinyin: "cheng2", definition: "city" },
        { char: "市", pinyin: "shi4", definition: "city" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "us" },
        { char: "来", pinyin: "lai2", definition: "too late" },
        { char: "不", pinyin: "bu4", definition: "too late" },
        { char: "及", pinyin: "ji2", definition: "too late" },
        { char: "想像", pinyin: "xiang3 xiang4", definition: "imagine" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "经", pinyin: "jing1", definition: "passed" },
        { char: "过", pinyin: "guo4", definition: "passed" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很多", pinyin: "hen3 duo1", definition: "many" },
        { char: "年", pinyin: "nian2", definition: "year" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "座", pinyin: "zuo4", definition: "measure word" },
        { char: "旧", pinyin: "jiu4", definition: "old" },
        { char: "建", pinyin: "jian4", definition: "architecture" },
        { char: "筑", pinyin: "zhu4", definition: "architecture" },
        { char: "依然", pinyin: "yi1 ran2", definition: "still" },
        { char: "保", pinyin: "bao3", definition: "to retain" },
        { char: "留", pinyin: "liu2", definition: "to retain" },
        { char: "着", pinyin: "zhe0", definition: "aspect marker" },
        { char: "它", pinyin: "ta1", definition: "its" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "特", pinyin: "te4", definition: "characteristic" },
        { char: "色", pinyin: "se4", definition: "characteristic" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "regardless of" },
        { char: "管", pinyin: "guan3", definition: "regardless of" },
        { char: "外", pinyin: "wai4", definition: "outside" },
        { char: "面", pinyin: "mian4", definition: "face" },
        { char: "怎", pinyin: "zen3", definition: "how" },
        { char: "么", pinyin: "me0", definition: "how" },
        { char: "变", pinyin: "bian4", definition: "to change" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "从", pinyin: "cong2", definition: "always" },
        { char: "来", pinyin: "lai2", definition: "always" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "安", pinyin: "an1", definition: "quiet" },
        { char: "静", pinyin: "jing4", definition: "quiet" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "骑", pinyin: "qi2", definition: "to ride" },
        { char: "自", pinyin: "zi4", definition: "bicycle" },
        { char: "行", pinyin: "xing2", definition: "bicycle" },
        { char: "车", pinyin: "che1", definition: "bicycle" },
        { char: "漫", pinyin: "man4", definition: "slowly" },
        { char: "步", pinyin: "bu4", definition: "step" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "老", pinyin: "lao3", definition: "old" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "拍", pinyin: "pai1", definition: "to take a picture" },
        { char: "下", pinyin: "xia4", definition: "down" },
        { char: "老", pinyin: "lao3", definition: "ordinary people" },
        { char: "百", pinyin: "bai3", definition: "ordinary people" },
        { char: "姓", pinyin: "xing4", definition: "ordinary people" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "平", pinyin: "ping2", definition: "ordinary" },
        { char: "静", pinyin: "jing4", definition: "ordinary" },
        { char: "生", pinyin: "sheng1", definition: "life" },
        { char: "活", pinyin: "huo2", definition: "life" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "高", pinyin: "gao1", definition: "high-speed rail" },
        { char: "铁", pinyin: "tie3", definition: "high-speed rail" },
        { char: "变", pinyin: "bian4", definition: "changed" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "慢", pinyin: "man4", definition: "slow" },
        { char: "下", pinyin: "xia4", definition: "down" },
        { char: "脚", pinyin: "jiao3", definition: "footstep" },
        { char: "步", pinyin: "bu4", definition: "footstep" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "要", pinyin: "yao4", definition: "if it were not for" },
        { char: "不", pinyin: "bu4", definition: "if it were not for" },
        { char: "是", pinyin: "shi4", definition: "if it were not for" },
        { char: "肚", pinyin: "du4", definition: "stomach" },
        { char: "子", pinyin: "zi0", definition: "stomach" },
        { char: "咕", pinyin: "gu1", definition: "rumbling sound" },
        { char: "噜", pinyin: "lu1", definition: "rumbling sound" },
        { char: "叫", pinyin: "jiao4", definition: "call" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "还", pinyin: "hai2", definition: "still" },
        { char: "来", pinyin: "lai2", definition: "too late" },
        { char: "不", pinyin: "bu4", definition: "too late" },
        { char: "及", pinyin: "ji2", definition: "too late" },
        { char: "想", pinyin: "xiang3", definition: "think" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "尝", pinyin: "chang2", definition: "to taste" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "家", pinyin: "jia1", definition: "measure word" },
        { char: "名", pinyin: "ming2", definition: "famous" },
        { char: "店", pinyin: "dian4", definition: "shop" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "小", pinyin: "xiao3", definition: "snacks" },
        { char: "吃", pinyin: "chi1", definition: "snacks" },
        { char: "呢", pinyin: "ne0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "街", pinyin: "jie1", definition: "street" },
        { char: "对", pinyin: "dui4", definition: "opposite side" },
        { char: "面", pinyin: "mian4", definition: "opposite side" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "景", pinyin: "jing3", definition: "scenery" },
        { char: "色", pinyin: "se4", definition: "scenery" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "游", pinyin: "you2", definition: "tourist" },
        { char: "客", pinyin: "ke4", definition: "tourist" },
        { char: "流", pinyin: "liu2", definition: "linger" },
        { char: "连", pinyin: "lian2", definition: "linger" },
        { char: "忘", pinyin: "wang4", definition: "linger" },
        { char: "返", pinyin: "fan3", definition: "linger" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "尽", pinyin: "jin3", definition: "as much as possible" },
        { char: "可", pinyin: "ke3", definition: "as much as possible" },
        { char: "能", pinyin: "neng2", definition: "as much as possible" },
        { char: "地", pinyin: "de0", definition: "adverbial marker" },
        { char: "将", pinyin: "jiang1", definition: "will" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "己", pinyin: "ji3", definition: "self" },
        { char: "融", pinyin: "rong2", definition: "to merge into" },
        { char: "入", pinyin: "ru4", definition: "to merge into" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "座", pinyin: "zuo4", definition: "measure word" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "城", pinyin: "cheng2", definition: "city" },
        { char: "市", pinyin: "shi4", definition: "city" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "听", pinyin: "ting1", definition: "listen" },
        { char: "它", pinyin: "ta1", definition: "its" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "声", pinyin: "sheng1", definition: "sound" },
        { char: "音", pinyin: "yin1", definition: "sound" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "regardless of" },
        { char: "管", pinyin: "guan3", definition: "regardless of" },
        { char: "未", pinyin: "wei4", definition: "future" },
        { char: "来", pinyin: "lai2", definition: "future" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "盖", pinyin: "gai4", definition: "build" },
        { char: "多少", pinyin: "duo1 shao3", definition: "how many" },
        { char: "大", pinyin: "da4", definition: "mansion" },
        { char: "厦", pinyin: "sha4", definition: "mansion" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "精彩", pinyin: "jing1 cai3", definition: "wonderful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
  },
  yunnan: {
    easy: [
      [
        { char: "昆", pinyin: "kun1", definition: "Kunming" },
        { char: "明", pinyin: "ming2", definition: "Kunming" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "丽", pinyin: "li4", definition: "beautiful" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "游", pinyin: "you2", definition: "to tour" },
        { char: "览", pinyin: "lan3", definition: "to tour" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "报", pinyin: "bao4", definition: "to sign up" },
        { char: "名", pinyin: "ming2", definition: "to sign up" },
        { char: "参", pinyin: "can1", definition: "to participate" },
        { char: "加", pinyin: "jia1", definition: "to participate" },
        { char: "旅", pinyin: "lv3", definition: "traveler" },
        { char: "行", pinyin: "xing2", definition: "travel" },
        { char: "团", pinyin: "tuan2", definition: "group" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "交", pinyin: "jiao1", definition: "transport" },
        { char: "通", pinyin: "tong1", definition: "transport" },
        { char: "包", pinyin: "bao1", definition: "include" },
        { char: "括", pinyin: "kuo4", definition: "include" },
        { char: "门", pinyin: "men2", definition: "door" },
        { char: "票", pinyin: "piao4", definition: "ticket" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "车", pinyin: "che1", definition: "vehicle" },
        { char: "厢", pinyin: "xiang1", definition: "carriage" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "旅", pinyin: "lv3", definition: "traveler" },
        { char: "客", pinyin: "ke4", definition: "traveler" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "车", pinyin: "che1", definition: "vehicle" },
        { char: "厢", pinyin: "xiang1", definition: "carriage" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "盒", pinyin: "he2", definition: "box" },
        { char: "饭", pinyin: "fan4", definition: "meal" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "软", pinyin: "ruan3", definition: "soft" },
        { char: "卧", pinyin: "wo4", definition: "sleep" },
        { char: "铺", pinyin: "pu4", definition: "bunk" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "硬", pinyin: "ying4", definition: "hard" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "大", pinyin: "da4", definition: "Dali" },
        { char: "理", pinyin: "li3", definition: "Dali" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "的", pinyin: "de0", definition: "particle" },
        { char: "塔", pinyin: "ta3", definition: "tower" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "丽", pinyin: "li4", definition: "Lijiang" },
        { char: "江", pinyin: "jiang1", definition: "Lijiang" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "河", pinyin: "he2", definition: "river" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "树", pinyin: "shu4", definition: "tree" },
        { char: "林", pinyin: "lin2", definition: "woods" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "讲", pinyin: "jiang3", definition: "tell" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "幽", pinyin: "you1", definition: "humor" },
        { char: "默", pinyin: "mo4", definition: "humor" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "石", pinyin: "shi2", definition: "stone" },
        { char: "林", pinyin: "lin2", definition: "forest" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "石", pinyin: "shi2", definition: "stone" },
        { char: "头", pinyin: "tou2", definition: "stone" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "分", pinyin: "fen1", definition: "share" },
        { char: "享", pinyin: "xiang3", definition: "share" },
        { char: "旅", pinyin: "lv3", definition: "travel" },
        { char: "行", pinyin: "xing2", definition: "travel" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],

      [
        { char: "昆", pinyin: "kun1", definition: "Kunming" },
        { char: "明", pinyin: "ming2", definition: "Kunming" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "丽", pinyin: "li4", definition: "beautiful" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "省", pinyin: "sheng3", definition: "provincial capital" },
        { char: "会", pinyin: "hui4", definition: "provincial capital" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "报", pinyin: "bao4", definition: "to register" },
        { char: "名", pinyin: "ming2", definition: "to register" },
        { char: "参", pinyin: "can1", definition: "to participate" },
        { char: "加", pinyin: "jia1", definition: "to participate" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "旅", pinyin: "lv3", definition: "group" },
        { char: "行", pinyin: "xing2", definition: "group" },
        { char: "团", pinyin: "tuan2", definition: "group" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "车", pinyin: "che1", definition: "train carriage" },
        { char: "厢", pinyin: "xiang1", definition: "train carriage" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "软", pinyin: "ruan3", definition: "soft" },
        { char: "卧", pinyin: "wo4", definition: "sleeping bunk" },
        { char: "铺", pinyin: "pu4", definition: "sleeping bunk" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "分", pinyin: "fen1", definition: "to share" },
        { char: "享", pinyin: "xiang3", definition: "to share" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "门", pinyin: "men2", definition: "admission ticket" },
        { char: "票", pinyin: "piao4", definition: "admission ticket" },
        { char: "包", pinyin: "bao1", definition: "to include" },
        { char: "括", pinyin: "kuo4", definition: "to include" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "交", pinyin: "jiao1", definition: "transportation" },
        { char: "通", pinyin: "tong1", definition: "transportation" },
        { char: "费", pinyin: "fei4", definition: "fee" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "导", pinyin: "dao3", definition: "guide" },
        { char: "游", pinyin: "you2", definition: "guide" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "幽", pinyin: "you1", definition: "humorous" },
        { char: "默", pinyin: "mo4", definition: "humorous" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "爱", pinyin: "ai4", definition: "loves" },
        { char: "讲", pinyin: "jiang3", definition: "to speak" },
        { char: "话", pinyin: "hua4", definition: "speech" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "大", pinyin: "da4", definition: "Dali" },
        { char: "理", pinyin: "li3", definition: "Dali" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "石", pinyin: "shi2", definition: "stone" },
        { char: "头", pinyin: "tou0", definition: "stone" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "塔", pinyin: "ta3", definition: "tower" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "丽", pinyin: "li4", definition: "Lijiang" },
        { char: "江", pinyin: "jiang1", definition: "Lijiang" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "小", pinyin: "xiao3", definition: "small" },
        { char: "河", pinyin: "he2", definition: "river" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "丽", pinyin: "li4", definition: "beautiful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "买", pinyin: "mai3", definition: "buy" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "些", pinyin: "xie1", definition: "some" },
        { char: "记", pinyin: "ji4", definition: "souvenir" },
        { char: "念", pinyin: "nian4", definition: "souvenir" },
        { char: "品", pinyin: "pin3", definition: "souvenir" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "千", pinyin: "qian1", definition: "absolutely must" },
        { char: "万", pinyin: "wan4", definition: "absolutely must" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "关", pinyin: "guan1", definition: "to close" },
        { char: "上", pinyin: "shang4", definition: "up" },
        { char: "灯", pinyin: "deng1", definition: "light" },
        { char: "笼", pinyin: "long2", definition: "lantern" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],

    medium: [
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "报", pinyin: "bao4", definition: "to register" },
        { char: "名", pinyin: "ming2", definition: "to register" },
        { char: "参", pinyin: "can1", definition: "to participate" },
        { char: "加", pinyin: "jia1", definition: "to participate" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "旅", pinyin: "lv3", definition: "group" },
        { char: "行", pinyin: "xing2", definition: "group" },
        { char: "团", pinyin: "tuan2", definition: "group" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "费", pinyin: "fei4", definition: "fee" },
        { char: "用", pinyin: "yong4", definition: "use" },
        { char: "包", pinyin: "bao1", definition: "to include" },
        { char: "括", pinyin: "kuo4", definition: "to include" },
        { char: "门", pinyin: "men2", definition: "admission ticket" },
        { char: "票", pinyin: "piao4", definition: "admission ticket" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "交", pinyin: "jiao1", definition: "transportation" },
        { char: "通", pinyin: "tong1", definition: "transportation" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "导", pinyin: "dao3", definition: "guide" },
        { char: "游", pinyin: "you2", definition: "guide" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "幽", pinyin: "you1", definition: "humorous" },
        { char: "默", pinyin: "mo4", definition: "humorous" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "火", pinyin: "huo3", definition: "train" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "厢", pinyin: "xiang1", definition: "carriage" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "睡", pinyin: "shui4", definition: "sleep" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "硬", pinyin: "ying4", definition: "hard" },
        { char: "卧", pinyin: "wo4", definition: "sleeping bunk" },
        { char: "铺", pinyin: "pu4", definition: "sleeping bunk" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "软", pinyin: "ruan3", definition: "soft" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "旅", pinyin: "lv3", definition: "passenger" },
        { char: "客", pinyin: "ke4", definition: "passenger" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "友好", pinyin: "you3 hao3", definition: "friendly" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "省", pinyin: "sheng3", definition: "provincial capital" },
        { char: "会", pinyin: "hui4", definition: "provincial capital" },
        { char: "昆", pinyin: "kun1", definition: "Kunming" },
        { char: "明", pinyin: "ming2", definition: "Kunming" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "饮", pinyin: "yin3", definition: "diet" },
        { char: "食", pinyin: "shi2", definition: "diet" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "风", pinyin: "feng1", definition: "custom" },
        { char: "俗", pinyin: "su2", definition: "custom" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "意", pinyin: "yi4", definition: "meaning" },
        { char: "思", pinyin: "si0", definition: "meaning" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "导", pinyin: "dao3", definition: "guide" },
        { char: "游", pinyin: "you2", definition: "guide" },
        { char: "给", pinyin: "gei3", definition: "to" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "讲", pinyin: "jiang3", definition: "to tell" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "分", pinyin: "fen1", definition: "to share" },
        { char: "享", pinyin: "xiang3", definition: "to share" },
        { char: "到", pinyin: "dao4", definition: "to" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "朋", pinyin: "peng2", definition: "friend" },
        { char: "友", pinyin: "you3", definition: "friend" },
        { char: "圈", pinyin: "quan1", definition: "circle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "石", pinyin: "shi2", definition: "stone forest" },
        { char: "林", pinyin: "lin2", definition: "stone forest" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "奇", pinyin: "qi2", definition: "strange" },
        { char: "怪", pinyin: "guai4", definition: "strange" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "石", pinyin: "shi2", definition: "stone" },
        { char: "头", pinyin: "tou0", definition: "stone" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "树", pinyin: "shu4", definition: "woods" },
        { char: "林", pinyin: "lin2", definition: "woods" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "游", pinyin: "you2", definition: "to tour" },
        { char: "览", pinyin: "lan3", definition: "to tour" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "大", pinyin: "da4", definition: "Dali" },
        { char: "理", pinyin: "li3", definition: "Dali" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "风景", pinyin: "feng1 jing3", definition: "scenery" },
        { char: "留", pinyin: "liu2", definition: "to leave behind" },
        { char: "下", pinyin: "xia4", definition: "behind" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "深", pinyin: "shen1", definition: "profound" },
        { char: "深", pinyin: "shen1", definition: "profound" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "印象", pinyin: "yin4 xiang4", definition: "impression" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
      [
        { char: "丽", pinyin: "li4", definition: "Lijiang" },
        { char: "江", pinyin: "jiang1", definition: "Lijiang" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "丽", pinyin: "li4", definition: "beautiful" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "河", pinyin: "he2", definition: "river" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "茶", pinyin: "cha2", definition: "teahouse" },
        { char: "馆", pinyin: "guan3", definition: "teahouse" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "喝", pinyin: "he1", definition: "drink" },
        { char: "茶", pinyin: "cha2", definition: "tea" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "看", pinyin: "kan4", definition: "see" },
        { char: "红", pinyin: "hong2", definition: "red" },
        { char: "灯", pinyin: "deng1", definition: "lantern" },
        { char: "笼", pinyin: "long2", definition: "lantern" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "习", pinyin: "xi2", definition: "habit" },
        { char: "惯", pinyin: "guan4", definition: "habit" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "盒", pinyin: "he2", definition: "box lunch" },
        { char: "饭", pinyin: "fan4", definition: "box lunch" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "下", pinyin: "xia4", definition: "after" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "吃", pinyin: "chi1", definition: "ate" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "顿", pinyin: "dun4", definition: "measure word" },
        { char: "面", pinyin: "mian4", definition: "noodles" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "房", pinyin: "fang2", definition: "landlord" },
        { char: "东", pinyin: "dong1", definition: "landlord" },
        { char: "对", pinyin: "dui4", definition: "to" },
        { char: "我", pinyin: "wo3", definition: "me" },
        { char: "说", pinyin: "shuo1", definition: "said" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "晚", pinyin: "wan3", definition: "night" },
        { char: "上", pinyin: "shang4", definition: "at" },
        { char: "千", pinyin: "qian1", definition: "absolutely must" },
        { char: "万", pinyin: "wan4", definition: "absolutely must" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "关", pinyin: "guan1", definition: "to close" },
        { char: "窗", pinyin: "chuang1", definition: "window" },
        { char: "户", pinyin: "hu4", definition: "window" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "买", pinyin: "mai3", definition: "bought" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "记", pinyin: "ji4", definition: "souvenir" },
        { char: "念", pinyin: "nian4", definition: "souvenir" },
        { char: "品", pinyin: "pin3", definition: "souvenir" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "回", pinyin: "hui2", definition: "return" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "讲", pinyin: "jiang3", definition: "to tell" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
    hard: [
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "报", pinyin: "bao4", definition: "to register" },
        { char: "名", pinyin: "ming2", definition: "to register" },
        { char: "参", pinyin: "can1", definition: "to participate" },
        { char: "加", pinyin: "jia1", definition: "to participate" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "云", pinyin: "yun2", definition: "Yunnan" },
        { char: "南", pinyin: "nan2", definition: "Yunnan" },
        { char: "旅", pinyin: "lv3", definition: "group" },
        { char: "行", pinyin: "xing2", definition: "group" },
        { char: "团", pinyin: "tuan2", definition: "group" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "费", pinyin: "fei4", definition: "fee" },
        { char: "用", pinyin: "yong4", definition: "use" },
        { char: "包", pinyin: "bao1", definition: "to include" },
        { char: "括", pinyin: "kuo4", definition: "to include" },
        { char: "交", pinyin: "jiao1", definition: "transportation" },
        { char: "通", pinyin: "tong1", definition: "transportation" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "门", pinyin: "men2", definition: "admission ticket" },
        { char: "票", pinyin: "piao4", definition: "admission ticket" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "导", pinyin: "dao3", definition: "guide" },
        { char: "游", pinyin: "you2", definition: "guide" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "幽", pinyin: "you1", definition: "humorous" },
        { char: "默", pinyin: "mo4", definition: "humorous" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "爱", pinyin: "ai4", definition: "love" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "旅", pinyin: "lv3", definition: "passenger" },
        { char: "客", pinyin: "ke4", definition: "passenger" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "讲", pinyin: "jiang3", definition: "to tell" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "趣", pinyin: "qu4", definition: "interest" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "昆", pinyin: "kun1", definition: "Kunming" },
        { char: "明", pinyin: "ming2", definition: "Kunming" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "火", pinyin: "huo3", definition: "train" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "车", pinyin: "che1", definition: "carriage" },
        { char: "厢", pinyin: "xiang1", definition: "carriage" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "干", pinyin: "gan1", definition: "clean" },
        { char: "净", pinyin: "jing4", definition: "clean" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "硬", pinyin: "ying4", definition: "hard" },
        { char: "卧", pinyin: "wo4", definition: "sleeping bunk" },
        { char: "铺", pinyin: "pu4", definition: "sleeping bunk" },
        { char: "没", pinyin: "mei2", definition: "not" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "软", pinyin: "ruan3", definition: "soft" },
        { char: "卧", pinyin: "wo4", definition: "sleeping bunk" },
        { char: "舒", pinyin: "shu1", definition: "comfortable" },
        { char: "服", pinyin: "fu2", definition: "comfortable" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "快", pinyin: "kuai4", definition: "fast" },
        { char: "就", pinyin: "jiu4", definition: "then" },
        { char: "习", pinyin: "xi2", definition: "to be accustomed to" },
        { char: "惯", pinyin: "guan4", definition: "to be accustomed to" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "这种", pinyin: "zhe4 zhong3", definition: "this kind" },
        { char: "饮", pinyin: "yin3", definition: "diet" },
        { char: "食", pinyin: "shi2", definition: "diet" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "还", pinyin: "hai2", definition: "still" },
        { char: "吃", pinyin: "chi1", definition: "ate" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "顿", pinyin: "dun4", definition: "measure word for meals" },
        { char: "盒", pinyin: "he2", definition: "box lunch" },
        { char: "饭", pinyin: "fan4", definition: "box lunch" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "昆", pinyin: "kun1", definition: "Kunming" },
        { char: "明", pinyin: "ming2", definition: "Kunming" },
        { char: "作", pinyin: "zuo4", definition: "as" },
        { char: "为", pinyin: "wei2", definition: "as" },
        { char: "省", pinyin: "sheng3", definition: "provincial capital" },
        { char: "会", pinyin: "hui4", definition: "provincial capital" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "风", pinyin: "feng1", definition: "custom" },
        { char: "景", pinyin: "jing3", definition: "scenery" },
        { char: "非", pinyin: "fei1", definition: "very" },
        { char: "常", pinyin: "chang2", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "丽", pinyin: "li4", definition: "beautiful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "石", pinyin: "shi2", definition: "Stone Forest" },
        { char: "林", pinyin: "lin2", definition: "Stone Forest" },
        { char: "游", pinyin: "you2", definition: "to tour" },
        { char: "览", pinyin: "lan3", definition: "to tour" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "面", pinyin: "mian4", definition: "face" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "各", pinyin: "ge4", definition: "each" },
        { char: "种", pinyin: "zhong3", definition: "kind" },
        { char: "奇", pinyin: "qi2", definition: "strange" },
        { char: "特的", pinyin: "te4 de0", definition: "special" },
        { char: "石", pinyin: "shi2", definition: "stone" },
        { char: "头", pinyin: "tou0", definition: "stone" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "像", pinyin: "xiang4", definition: "like" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "片", pinyin: "pian4", definition: "piece" },
        { char: "石", pinyin: "shi2", definition: "stone" },
        { char: "头", pinyin: "tou0", definition: "stone" },
        { char: "树", pinyin: "shu4", definition: "woods" },
        { char: "林", pinyin: "lin2", definition: "woods" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "难", pinyin: "nan2", definition: "hard" },
        { char: "以", pinyin: "yi3", definition: "to" },
        { char: "忘", pinyin: "wang4", definition: "forget" },
        { char: "记", pinyin: "ji4", definition: "remember" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "大", pinyin: "da4", definition: "Dali" },
        { char: "理", pinyin: "li3", definition: "Dali" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "建", pinyin: "jian4", definition: "building" },
        { char: "筑", pinyin: "zhu4", definition: "building" },
        { char: "中", pinyin: "zhong1", definition: "middle" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "座", pinyin: "zuo4", definition: "measure word" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "塔", pinyin: "ta3", definition: "tower" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "我", pinyin: "wo3", definition: "me" },
        { char: "留", pinyin: "liu2", definition: "to leave behind" },
        { char: "下", pinyin: "xia4", definition: "behind" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "深", pinyin: "shen1", definition: "deep" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "印象", pinyin: "yin4 xiang4", definition: "impression" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "房", pinyin: "fang2", definition: "landlord" },
        { char: "东", pinyin: "dong1", definition: "landlord" },
        { char: "聊", pinyin: "liao2", definition: "chat" },
        { char: "天", pinyin: "tian1", definition: "sky" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "分", pinyin: "fen1", definition: "to share" },
        { char: "享", pinyin: "xiang3", definition: "to share" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "当", pinyin: "dang1", definition: "at" },
        { char: "地", pinyin: "di4", definition: "place" },
        { char: "的风", pinyin: "de0 feng1", definition: "possessive custom" },
        { char: "俗", pinyin: "su2", definition: "custom" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "丽", pinyin: "li4", definition: "Lijiang" },
        { char: "江", pinyin: "jiang1", definition: "Lijiang" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "夜", pinyin: "ye4", definition: "night" },
        { char: "晚", pinyin: "wan3", definition: "evening" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "小", pinyin: "xiao3", definition: "small" },
        { char: "河", pinyin: "he2", definition: "river" },
        { char: "两", pinyin: "liang3", definition: "two" },
        { char: "边", pinyin: "bian1", definition: "side" },
        { char: "挂", pinyin: "gua4", definition: "hang" },
        { char: "满", pinyin: "man3", definition: "full" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "红", pinyin: "hong2", definition: "red" },
        { char: "灯", pinyin: "deng1", definition: "lantern" },
        { char: "笼", pinyin: "long2", definition: "lantern" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "走", pinyin: "zou3", definition: "walk" },
        { char: "进", pinyin: "jin4", definition: "enter" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "家", pinyin: "jia1", definition: "measure word" },
        { char: "茶", pinyin: "cha2", definition: "teahouse" },
        { char: "馆", pinyin: "guan3", definition: "teahouse" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "听", pinyin: "ting1", definition: "listen" },
        { char: "当地", pinyin: "dang1 di4", definition: "local" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "讲", pinyin: "jiang3", definition: "to tell" },
        { char: "那", pinyin: "na4", definition: "those" },
        { char: "些", pinyin: "xie1", definition: "some" },
        { char: "动", pinyin: "dong4", definition: "moving" },
        { char: "听", pinyin: "ting1", definition: "listen" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "心情", pinyin: "xin1 qing2", definition: "mood" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "舒", pinyin: "shu1", definition: "comfortable" },
        { char: "服", pinyin: "fu2", definition: "comfortable" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "旅", pinyin: "lv3", definition: "travel" },
        { char: "游", pinyin: "you2", definition: "travel" },
        { char: "结", pinyin: "jie2", definition: "finish" },
        { char: "束", pinyin: "shu4", definition: "finish" },
        { char: "时", pinyin: "shi2", definition: "time" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "买", pinyin: "mai3", definition: "bought" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "当地", pinyin: "dang1 di4", definition: "local" },
        { char: "特", pinyin: "te4", definition: "special" },
        { char: "色", pinyin: "se4", definition: "special" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "记", pinyin: "ji4", definition: "souvenir" },
        { char: "念", pinyin: "nian4", definition: "souvenir" },
        { char: "品", pinyin: "pin3", definition: "souvenir" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "导", pinyin: "dao3", definition: "guide" },
        { char: "游", pinyin: "you2", definition: "guide" },
        { char: "提", pinyin: "ti2", definition: "remind" },
        { char: "醒", pinyin: "xing3", definition: "remind" },
        { char: "我", pinyin: "wo3", definition: "me" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "千", pinyin: "qian1", definition: "absolutely must" },
        { char: "万", pinyin: "wan4", definition: "absolutely must" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "带", pinyin: "dai4", definition: "carry" },
        { char: "好", pinyin: "hao3", definition: "well" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "己", pinyin: "ji3", definition: "self" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "行", pinyin: "xing2", definition: "luggage" },
        { char: "李", pinyin: "li3", definition: "luggage" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "丢", pinyin: "diu1", definition: "lose" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "车", pinyin: "che1", definition: "carriage" },
        { char: "厢", pinyin: "xiang1", definition: "carriage" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "非", pinyin: "fei1", definition: "very" },
        { char: "常", pinyin: "chang2", definition: "very" },
        { char: "喜", pinyin: "xi3", definition: "like" },
        { char: "欢", pinyin: "huan1", definition: "like" },
        { char: "云", pinyin: "yun2", definition: "Yunnan" },
        { char: "南", pinyin: "nan2", definition: "Yunnan" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "小", pinyin: "xiao3", definition: "small" },
        { char: "吃", pinyin: "chi1", definition: "snacks" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "特", pinyin: "te4", definition: "especially" },
        { char: "别", pinyin: "bie2", definition: "especially" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "碗", pinyin: "wan3", definition: "bowl" },
        { char: "热", pinyin: "re4", definition: "hot" },
        { char: "腾", pinyin: "teng2", definition: "騰" },
        { char: "腾", pinyin: "teng2", definition: "騰" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "面", pinyin: "mian4", definition: "noodles" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "火", pinyin: "huo3", definition: "train" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "盒", pinyin: "he2", definition: "box lunch" },
        { char: "饭", pinyin: "fan4", definition: "box lunch" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "一般", pinyin: "yi1 ban1", definition: "average" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "下", pinyin: "xia4", definition: "after" },
        { char: "车", pinyin: "che1", definition: "train" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "饮", pinyin: "yin3", definition: "diet" },
        { char: "食", pinyin: "shi2", definition: "diet" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "满", pinyin: "man3", definition: "satisfy" },
        { char: "意", pinyin: "yi4", definition: "satisfy" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "旅", pinyin: "lv3", definition: "voyage" },
        { char: "客", pinyin: "ke4", definition: "voyage" },
        { char: "中", pinyin: "zhong1", definition: "among" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "位", pinyin: "wei4", definition: "measure word" },
        { char: "老", pinyin: "lao3", definition: "old" },
        { char: "师", pinyin: "shi1", definition: "teacher" },
        { char: "讲", pinyin: "jiang3", definition: "told" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "一个", pinyin: "yi1 ge4", definition: "one" },
        { char: "关于", pinyin: "guan1 yu2", definition: "about" },
        { char: "古", pinyin: "gu3", definition: "ancient" },
        { char: "老", pinyin: "lao3", definition: "ancient" },
        { char: "河", pinyin: "he2", definition: "river" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "故", pinyin: "gu4", definition: "story" },
        { char: "事", pinyin: "shi4", definition: "story" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "说", pinyin: "shuo1", definition: "said" },
        { char: "话", pinyin: "hua4", definition: "words" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "幽", pinyin: "you1", definition: "humorous" },
        { char: "默", pinyin: "mo4", definition: "humorous" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "听", pinyin: "ting1", definition: "listen" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "入", pinyin: "ru4", definition: "enter" },
        { char: "神", pinyin: "shen2", definition: "spirit" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "千", pinyin: "qian1", definition: "absolutely must" },
        { char: "万", pinyin: "wan4", definition: "absolutely must" },
        { char: "别", pinyin: "bie2", definition: "don't" },
        { char: "忘", pinyin: "wang4", definition: "forget" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "游", pinyin: "you2", definition: "to tour" },
        { char: "览", pinyin: "lan3", definition: "to tour" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "里的", pinyin: "li3 de0", definition: "place possessive" },
        { char: "树", pinyin: "shu4", definition: "woods" },
        { char: "林", pinyin: "lin2", definition: "woods" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "环境", pinyin: "huan2 jing4", definition: "environment" },
        { char: "非常", pinyin: "fei1 chang2", definition: "very" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "丽", pinyin: "li4", definition: "beautiful" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "把", pinyin: "ba3", definition: "marker" },
        { char: "拍", pinyin: "pai1", definition: "take" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "照片", pinyin: "zhao4 pian4", definition: "photo" },
        { char: "分", pinyin: "fen1", definition: "to share" },
        { char: "享", pinyin: "xiang3", definition: "to share" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "看", pinyin: "kan4", definition: "look" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "although" },
        { char: "这次", pinyin: "zhe4 ci4", definition: "this time" },
        { char: "旅", pinyin: "lv3", definition: "voyage" },
        { char: "行", pinyin: "xing2", definition: "voyage" },
        { char: "已经", pinyin: "yi3 jing1", definition: "already" },
        { char: "结", pinyin: "jie2", definition: "finish" },
        { char: "束", pinyin: "shu4", definition: "finish" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "好的", pinyin: "hao3 de0", definition: "good" },
        { char: "回", pinyin: "hui2", definition: "return" },
        { char: "忆", pinyin: "yi4", definition: "memory" },
        { char: "深", pinyin: "shen1", definition: "deep" },
        { char: "深", pinyin: "shen1", definition: "deep" },
        { char: "地", pinyin: "de0", definition: "adverbial marker" },
        { char: "留", pinyin: "liu2", definition: "stay behind" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "我", pinyin: "wo3", definition: "my" },
        { char: "心", pinyin: "xin1", definition: "heart" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "云", pinyin: "yun2", definition: "Yunnan" },
        { char: "南", pinyin: "nan2", definition: "Yunnan" },
        { char: "真", pinyin: "zhen1", definition: "really" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "美", pinyin: "mei3", definition: "beautiful" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "！", pinyin: "！", definition: "punctuation" },
      ],
    ],
  },
  health: {
    easy: [
      [
        { char: "夫", pinyin: "fu1", definition: "husband and wife" },
        { char: "妻", pinyin: "qi1", definition: "husband and wife" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "广", pinyin: "guang3", definition: "public square" },
        { char: "场", pinyin: "chang3", definition: "public square" },
        { char: "散", pinyin: "san4", definition: "to take a walk" },
        { char: "步", pinyin: "bu4", definition: "to take a walk" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "they" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "退", pinyin: "tui4", definition: "to retire" },
        { char: "休", pinyin: "xiu1", definition: "to retire" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "早", pinyin: "zao3", definition: "early morning" },
        { char: "晨", pinyin: "chen2", definition: "early morning" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "必", pinyin: "bi4", definition: "need not" },
        { char: "出", pinyin: "chu1", definition: "to go out" },
        { char: "门", pinyin: "men2", definition: "to go out" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "练", pinyin: "lian4", definition: "practice" },
        { char: "瑜", pinyin: "yu2", definition: "yoga" },
        { char: "伽", pinyin: "jia1", definition: "yoga" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "重", pinyin: "zhong4", definition: "to attach importance to" },
        { char: "视", pinyin: "shi4", definition: "to attach importance to" },
        { char: "睡", pinyin: "shui4", definition: "sleep" },
        { char: "眠", pinyin: "mian2", definition: "sleep" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "熬", pinyin: "ao2", definition: "to stay up late" },
        { char: "夜", pinyin: "ye4", definition: "to stay up late" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "减", pinyin: "jian3", definition: "to lose weight" },
        { char: "肥", pinyin: "fei2", definition: "to lose weight" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "健", pinyin: "jian4", definition: "gym" },
        { char: "身", pinyin: "shen1", definition: "gym" },
        { char: "房", pinyin: "fang2", definition: "gym" },
        { char: "锻", pinyin: "duan4", definition: "to exercise" },
        { char: "炼", pinyin: "lian4", definition: "to exercise" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "必", pinyin: "bi4", definition: "must" },
        { char: "须", pinyin: "xu1", definition: "must" },
        { char: "注", pinyin: "zhu4", definition: "to pay attention to" },
        { char: "意", pinyin: "yi4", definition: "to pay attention to" },
        { char: "营", pinyin: "ying2", definition: "nutrition" },
        { char: "养", pinyin: "yang3", definition: "nutrition" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "要", pinyin: "yao4", definition: "should not" },
        { char: "吸", pinyin: "xi1", definition: "to smoke" },
        { char: "烟", pinyin: "yan1", definition: "to smoke" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "只", pinyin: "zhi3", definition: "as long as" },
        { char: "要", pinyin: "yao4", definition: "as long as" },
        { char: "动", pinyin: "dong4", definition: "movement" },
        { char: "作", pinyin: "zuo4", definition: "movement" },
        { char: "对", pinyin: "dui4", definition: "correct" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "打", pinyin: "da3", definition: "to do" },
        { char: "太", pinyin: "tai4", definition: "tai chi" },
        { char: "极", pinyin: "ji2", definition: "tai chi" },
        { char: "拳", pinyin: "quan2", definition: "tai chi" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "饱", pinyin: "bao3", definition: "full" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "树", pinyin: "shu4", definition: "tree" },
        { char: "下", pinyin: "xia4", definition: "under" },
        { char: "随", pinyin: "sui2", definition: "casual" },
        { char: "便", pinyin: "bian4", definition: "casual" },
        { char: "走", pinyin: "zou3", definition: "walk" },
        { char: "走", pinyin: "zou3", definition: "walk" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "科", pinyin: "ke1", definition: "scientific" },
        { char: "学", pinyin: "xue2", definition: "scientific" },
        { char: "锻", pinyin: "duan4", definition: "to exercise" },
        { char: "炼", pinyin: "lian4", definition: "to exercise" },
        { char: "等", pinyin: "deng3", definition: "etc." },
        { char: "于", pinyin: "yu2", definition: "equivalent to" },
        { char: "健", pinyin: "jian4", definition: "health" },
        { char: "康", pinyin: "kang1", definition: "health" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "要", pinyin: "yao4", definition: "want" },
        { char: "成", pinyin: "cheng2", definition: "to become" },
        { char: "为", pinyin: "wei2", definition: "to become" },
        { char: "老", pinyin: "lao3", definition: "old" },
        { char: "师", pinyin: "shi1", definition: "teacher" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "博", pinyin: "bo2", definition: "museum" },
        { char: "物", pinyin: "wu4", definition: "museum" },
        { char: "馆", pinyin: "guan3", definition: "museum" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "没", pinyin: "mei2", definition: "no" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "树", pinyin: "shu4", definition: "tree" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "与", pinyin: "yu3", definition: "and" },
        { char: "朋", pinyin: "peng2", definition: "friend" },
        { char: "友", pinyin: "you3", definition: "friend" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "看", pinyin: "kan4", definition: "look" },
        { char: "画", pinyin: "hua4", definition: "painting" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "即", pinyin: "ji2", definition: "even if" },
        { char: "使", pinyin: "shi3", definition: "even if" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "忙", pinyin: "mang2", definition: "busy" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "补", pinyin: "bu3", definition: "to replenish" },
        { char: "充", pinyin: "chong1", definition: "to replenish" },
        { char: "水", pinyin: "shui3", definition: "water" },
        { char: "分", pinyin: "fen4", definition: "content" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
    medium: [
      [
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "对", pinyin: "dui4", definition: "pair" },
        { char: "夫", pinyin: "fu1", definition: "husband and wife" },
        { char: "妻", pinyin: "qi1", definition: "husband and wife" },
        { char: "退", pinyin: "tui4", definition: "to retire" },
        { char: "休", pinyin: "xiu1", definition: "to retire" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "早", pinyin: "zao3", definition: "early morning" },
        { char: "晨", pinyin: "chen2", definition: "early morning" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "广", pinyin: "guang3", definition: "public square" },
        { char: "场", pinyin: "chang3", definition: "public square" },
        { char: "散", pinyin: "san4", definition: "to take a walk" },
        { char: "步", pinyin: "bu4", definition: "to take a walk" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "they" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "重", pinyin: "zhong4", definition: "to attach importance to" },
        { char: "视", pinyin: "shi4", definition: "to attach importance to" },
        { char: "锻", pinyin: "duan4", definition: "to exercise" },
        { char: "炼", pinyin: "lian4", definition: "to exercise" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "为", pinyin: "wei4", definition: "for" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "减", pinyin: "jian3", definition: "to lose weight" },
        { char: "肥", pinyin: "fei2", definition: "to lose weight" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "周", pinyin: "zhou1", definition: "week" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "三", pinyin: "san1", definition: "three" },
        { char: "次", pinyin: "ci4", definition: "times" },
        { char: "健", pinyin: "jian4", definition: "gym" },
        { char: "身", pinyin: "shen1", definition: "gym" },
        { char: "房", pinyin: "fang2", definition: "gym" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "即", pinyin: "ji2", definition: "even if" },
        { char: "使", pinyin: "shi3", definition: "even if" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "累", pinyin: "lei4", definition: "tired" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他也", pinyin: "ta1 ye3", definition: "he also" },
        { char: "必", pinyin: "bi4", definition: "must" },
        { char: "须", pinyin: "xu1", definition: "must" },
        { char: "做", pinyin: "zuo4", definition: "do" },
        { char: "完", pinyin: "wan2", definition: "finish" },
        { char: "动", pinyin: "dong4", definition: "movement" },
        { char: "作", pinyin: "zuo4", definition: "movement" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "只", pinyin: "zhi3", definition: "as long as" },
        { char: "要", pinyin: "yao4", definition: "as long as" },
        { char: "注", pinyin: "zhu4", definition: "to pay attention to" },
        { char: "意", pinyin: "yi4", definition: "to pay attention to" },
        { char: "营", pinyin: "ying2", definition: "nutrition" },
        { char: "养", pinyin: "yang3", definition: "nutrition" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "身体", pinyin: "shen1 ti3", definition: "body" },
        { char: "就", pinyin: "jiu4", definition: "then" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "起来", pinyin: "qi3 lai0", definition: "become" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "你不", pinyin: "ni3 bu4", definition: "you don't" },
        { char: "必", pinyin: "bi4", definition: "need to" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "随", pinyin: "sui2", definition: "casual" },
        { char: "便", pinyin: "bian4", definition: "casual" },
        { char: "地", pinyin: "de0", definition: "particle" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "饭", pinyin: "fan4", definition: "meal" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "必须", pinyin: "bi4 xu1", definition: "must" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "饱", pinyin: "bao3", definition: "full" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "早", pinyin: "zao3", definition: "early morning" },
        { char: "晨", pinyin: "chen2", definition: "early morning" },
        { char: "出", pinyin: "chu1", definition: "to go out" },
        { char: "门", pinyin: "men2", definition: "to go out" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他在", pinyin: "ta1 zai4", definition: "he at" },
        { char: "树", pinyin: "shu4", definition: "tree" },
        { char: "下", pinyin: "xia4", definition: "under" },
        { char: "打", pinyin: "da3", definition: "to do" },
        { char: "太", pinyin: "tai4", definition: "tai chi" },
        { char: "极", pinyin: "ji2", definition: "tai chi" },
        { char: "拳", pinyin: "quan2", definition: "tai chi" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "已经", pinyin: "yi3 jing1", definition: "already" },
        { char: "成", pinyin: "cheng2", definition: "to become" },
        { char: "为", pinyin: "wei2", definition: "to become" },
        { char: "他的", pinyin: "ta1 de0", definition: "his" },
        { char: "习", pinyin: "xi2", definition: "habit" },
        { char: "惯", pinyin: "guan4", definition: "habit" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "科学", pinyin: "ke1 xue2", definition: "scientific" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "生活", pinyin: "sheng1 huo2", definition: "life" },
        { char: "方", pinyin: "fang1", definition: "aspect" },
        { char: "面", pinyin: "mian4", definition: "aspect" },
        { char: "包", pinyin: "bao1", definition: "include" },
        { char: "括", pinyin: "kuo4", definition: "include" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "睡", pinyin: "shui4", definition: "sleep" },
        { char: "觉", pinyin: "jiao4", definition: "sleep" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "你不", pinyin: "ni3 bu4", definition: "you don't" },
        { char: "能", pinyin: "neng2", definition: "can" },
        { char: "常", pinyin: "chang2", definition: "often" },
        { char: "常", pinyin: "chang2", definition: "often" },
        { char: "熬", pinyin: "ao2", definition: "to stay up late" },
        { char: "夜", pinyin: "ye4", definition: "to stay up late" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "因为", pinyin: "yin1 wei4", definition: "because" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "于", pinyin: "yu2", definition: "equal" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "杀", pinyin: "sha1", definition: "kill" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "经常", pinyin: "jing1 chang2", definition: "often" },
        { char: "与", pinyin: "yu3", definition: "with" },
        { char: "朋", pinyin: "peng2", definition: "friend" },
        { char: "友", pinyin: "you3", definition: "friend" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "博", pinyin: "bo2", definition: "museum" },
        { char: "物", pinyin: "wu4", definition: "museum" },
        { char: "馆", pinyin: "guan3", definition: "museum" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "即使", pinyin: "ji2 shi3", definition: "even if" },
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "里", pinyin: "li3", definition: "place" },
        { char: "没有", pinyin: "mei2 you3", definition: "not have" },
        { char: "瑜", pinyin: "yu2", definition: "yoga" },
        { char: "伽", pinyin: "jia1", definition: "yoga" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "觉", pinyin: "jue2", definition: "feel" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "快乐", pinyin: "kuai4 le4", definition: "happy" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "医生", pinyin: "yi1 sheng1", definition: "doctor" },
        { char: "说", pinyin: "shuo1", definition: "say" },
        { char: "你不", pinyin: "ni3 bu4", definition: "you don't" },
        { char: "必", pinyin: "bi4", definition: "need to" },
        { char: "补", pinyin: "bu3", definition: "to supplement" },
        { char: "充", pinyin: "chong1", definition: "to supplement" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "药", pinyin: "yao4", definition: "medicine" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "你只", pinyin: "ni3 zhi3", definition: "you only" },
        { char: "需要", pinyin: "xu1 yao4", definition: "need" },
        { char: "注", pinyin: "zhu4", definition: "to pay attention to" },
        { char: "意", pinyin: "yi4", definition: "to pay attention to" },
        { char: "睡", pinyin: "shuì", definition: "sleep" },
        { char: "眠", pinyin: "mián", definition: "sleep" },
        { char: "等", pinyin: "děng", definition: "etc." },
        { char: "生活", pinyin: "sheng1 huo2", definition: "life" },
        { char: "细节", pinyin: "xi4 jie2", definition: "detail" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "广", pinyin: "guang3", definition: "public square" },
        { char: "场", pinyin: "chang3", definition: "public square" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "准", pinyin: "zhun3", definition: "allow" },
        { char: "吸", pinyin: "xi1", definition: "to smoke" },
        { char: "烟", pinyin: "yan1", definition: "to smoke" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "因为", pinyin: "yin1 wei4", definition: "because" },
        { char: "大家", pinyin: "da4 jia1", definition: "everyone" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "重", pinyin: "zhong4", definition: "to attach importance to" },
        { char: "视", pinyin: "shi4", definition: "to attach importance to" },
        { char: "健", pinyin: "jian4", definition: "health" },
        { char: "康", pinyin: "kang1", definition: "health" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "减", pinyin: "jian3", definition: "to lose weight" },
        { char: "肥", pinyin: "fei2", definition: "to lose weight" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "于", pinyin: "yu2", definition: "equal" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "饭", pinyin: "fan4", definition: "food" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "只要", pinyin: "zhi3 yao4", definition: "as long as" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "科学", pinyin: "ke1 xue2", definition: "scientific" },
        { char: "地", pinyin: "de0", definition: "particle" },
        { char: "锻", pinyin: "duan4", definition: "to exercise" },
        { char: "炼", pinyin: "lian4", definition: "to exercise" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "身", pinyin: "shen1", definition: "body" },
        { char: "体", pinyin: "ti3", definition: "body" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "然", pinyin: "ran2", definition: "natural" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "瘦", pinyin: "shou4", definition: "thin" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "睡", pinyin: "shui4", definition: "sleep" },
        { char: "眠", pinyin: "mian2", definition: "sleep" },
        { char: "方", pinyin: "fang1", definition: "aspect" },
        { char: "面", pinyin: "mian4", definition: "aspect" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "随", pinyin: "sui2", definition: "careless" },
        { char: "便", pinyin: "bian4", definition: "careless" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "样", pinyin: "yang4", definition: "kind" },
        { char: "子", pinyin: "zi0", definition: "kind" },
        { char: "对", pinyin: "dui4", definition: "to" },
        { char: "身体", pinyin: "shen1 ti3", definition: "body" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "必", pinyin: "bi4", definition: "must" },
        { char: "须", pinyin: "xu1", definition: "must" },
        { char: "改", pinyin: "gai3", definition: "change" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
    hard: [
      [
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "对", pinyin: "dui4", definition: "pair" },
        { char: "老", pinyin: "lao3", definition: "old" },
        { char: "夫", pinyin: "fu1", definition: "husband" },
        { char: "妻", pinyin: "qi1", definition: "wife" },
        { char: "退", pinyin: "tui4", definition: "retire" },
        { char: "休", pinyin: "xiu1", definition: "retire" },
        { char: "后", pinyin: "hou4", definition: "after" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "早", pinyin: "zao3", definition: "morning" },
        { char: "晨", pinyin: "chen2", definition: "morning" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "准", pinyin: "zhun3", definition: "on time" },
        { char: "时", pinyin: "shi2", definition: "time" },
        { char: "出", pinyin: "chu1", definition: "go out" },
        { char: "门", pinyin: "men2", definition: "go out" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "广", pinyin: "guang3", definition: "square" },
        { char: "场", pinyin: "chang3", definition: "square" },
        { char: "树", pinyin: "shu4", definition: "tree" },
        { char: "下", pinyin: "xia4", definition: "under" },
        { char: "看", pinyin: "kan4", definition: "watch" },
        { char: "别", pinyin: "bie2", definition: "other" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "打", pinyin: "da3", definition: "play" },
        { char: "太", pinyin: "tai4", definition: "tai chi" },
        { char: "极", pinyin: "ji2", definition: "tai chi" },
        { char: "拳", pinyin: "quan2", definition: "tai chi" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "已", pinyin: "yi3", definition: "already" },
        { char: "经", pinyin: "jing1", definition: "already" },
        { char: "成", pinyin: "cheng2", definition: "become" },
        { char: "为", pinyin: "wei2", definition: "become" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "生", pinyin: "sheng1", definition: "life" },
        { char: "活", pinyin: "huo2", definition: "life" },
        { char: "中", pinyin: "zhong1", definition: "middle" },
        { char: "重", pinyin: "zhong4", definition: "importance" },
        { char: "要", pinyin: "yao4", definition: "important" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "方", pinyin: "fang1", definition: "aspect" },
        { char: "面", pinyin: "mian4", definition: "aspect" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "即", pinyin: "ji2", definition: "even" },
        { char: "使", pinyin: "shi3", definition: "if" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "作", pinyin: "zuo4", definition: "work" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "忙", pinyin: "mang2", definition: "busy" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "能", pinyin: "neng2", definition: "can" },
        { char: "随", pinyin: "sui2", definition: "casual" },
        { char: "便", pinyin: "bian4", definition: "casual" },
        { char: "熬", pinyin: "ao2", definition: "stay up" },
        { char: "夜", pinyin: "ye4", definition: "late" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "必", pinyin: "bi4", definition: "must" },
        { char: "须", pinyin: "xu1", definition: "must" },
        { char: "注", pinyin: "zhu4", definition: "attention" },
        { char: "意", pinyin: "yi4", definition: "attention" },
        { char: "睡", pinyin: "shui4", definition: "sleep" },
        { char: "眠", pinyin: "mian2", definition: "sleep" },
        { char: "质", pinyin: "zhi4", definition: "quality" },
        { char: "量", pinyin: "liang4", definition: "quality" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "及", pinyin: "ji2", definition: "timely" },
        { char: "时", pinyin: "shi2", definition: "timely" },
        { char: "补", pinyin: "bu3", definition: "supplement" },
        { char: "充", pinyin: "chong1", definition: "supplement" },
        { char: "营", pinyin: "ying2", definition: "nutrition" },
        { char: "养", pinyin: "yang3", definition: "nutrition" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "样", pinyin: "yang4", definition: "way" },
        { char: "对", pinyin: "dui4", definition: "towards" },
        { char: "身", pinyin: "shen1", definition: "body" },
        { char: "体", pinyin: "ti3", definition: "body" },
        { char: "健", pinyin: "jian4", definition: "health" },
        { char: "康", pinyin: "kang1", definition: "health" },
        { char: "才", pinyin: "cai2", definition: "then" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "处", pinyin: "chu4", definition: "benefit" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "健", pinyin: "jian4", definition: "gym" },
        { char: "身", pinyin: "shen1", definition: "gym" },
        { char: "房", pinyin: "fang2", definition: "gym" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "看", pinyin: "kan4", definition: "watch" },
        { char: "到", pinyin: "dao4", definition: "at" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "为", pinyin: "wei4", definition: "for" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "减", pinyin: "jian3", definition: "lose" },
        { char: "肥", pinyin: "fei2", definition: "weight" },
        { char: "而", pinyin: "er2", definition: "and" },
        { char: "努", pinyin: "nu3", definition: "hard" },
        { char: "力", pinyin: "li4", definition: "work" },
        { char: "锻", pinyin: "duan4", definition: "exercise" },
        { char: "炼", pinyin: "lian4", definition: "exercise" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "只", pinyin: "zhi3", definition: "as long as" },
        { char: "要", pinyin: "yao4", definition: "as long as" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "坚", pinyin: "jian1", definition: "persist" },
        { char: "持", pinyin: "chi2", definition: "persist" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "必", pinyin: "bi4", definition: "need" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "过", pinyin: "guo4", definition: "excessively" },
        { char: "担", pinyin: "dan1", definition: "worry" },
        { char: "心", pinyin: "xin1", definition: "worry" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "于", pinyin: "yu2", definition: "to" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "己", pinyin: "ji3", definition: "self" },
        { char: "投", pinyin: "tou2", definition: "invest" },
        { char: "资", pinyin: "zi1", definition: "invest" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "科", pinyin: "ke1", definition: "science" },
        { char: "学", pinyin: "xue2", definition: "science" },
        { char: "地", pinyin: "de0", definition: "particle" },
        { char: "重", pinyin: "zhong4", definition: "importance" },
        { char: "视", pinyin: "shi4", definition: "importance" },
        { char: "饮", pinyin: "yin3", definition: "eating" },
        { char: "食", pinyin: "shi2", definition: "eating" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "必须", pinyin: "bi4 xu1", definition: "must" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "顿", pinyin: "dun4", definition: "meal" },
        { char: "饭", pinyin: "fan4", definition: "meal" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "能", pinyin: "neng2", definition: "can" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "得", pinyin: "de0", definition: "particle" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "饱", pinyin: "bao3", definition: "full" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "与", pinyin: "yu3", definition: "and" },
        { char: "此", pinyin: "ci3", definition: "this" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "时", pinyin: "shi2", definition: "time" },
        { char: "要", pinyin: "yao4", definition: "must" },
        { char: "远", pinyin: "yuan3", definition: "far" },
        { char: "离", pinyin: "li2", definition: "away" },
        { char: "吸", pinyin: "xi1", definition: "smoke" },
        { char: "烟", pinyin: "yan1", definition: "smoke" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "从", pinyin: "cong2", definition: "from" },
        { char: "各", pinyin: "ge4", definition: "various" },
        { char: "个", pinyin: "ge4", definition: "measure" },
        { char: "方", pinyin: "fang1", definition: "aspect" },
        { char: "面", pinyin: "mian4", definition: "aspect" },
        { char: "保", pinyin: "bao3", definition: "protect" },
        { char: "护", pinyin: "hu4", definition: "protect" },
        { char: "身", pinyin: "shen1", definition: "body" },
        { char: "体", pinyin: "ti3", definition: "body" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "早", pinyin: "zao3", definition: "morning" },
        { char: "晨", pinyin: "chen2", definition: "morning" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "瑜", pinyin: "yu2", definition: "yoga" },
        { char: "伽", pinyin: "jia1", definition: "yoga" },
        { char: "动", pinyin: "dong4", definition: "movement" },
        { char: "作", pinyin: "zuo4", definition: "movement" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "可", pinyin: "ke3", definition: "can" },
        { char: "以", pinyin: "yi3", definition: "can" },
        { char: "帮", pinyin: "bang1", definition: "help" },
        { char: "助", pinyin: "zhu4", definition: "help" },
        { char: "我", pinyin: "wo3", definition: "me" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "放", pinyin: "fang4", definition: "relax" },
        { char: "松", pinyin: "song1", definition: "relax" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "公", pinyin: "gong1", definition: "park" },
        { char: "园", pinyin: "yuan2", definition: "park" },
        { char: "散", pinyin: "san4", definition: "walk" },
        { char: "步", pinyin: "bu4", definition: "walk" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "看", pinyin: "kan4", definition: "look" },
        { char: "看", pinyin: "kan4", definition: "look" },
        { char: "绿", pinyin: "lv4", definition: "green" },
        { char: "树", pinyin: "shu4", definition: "tree" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "比", pinyin: "bi3", definition: "than" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "博", pinyin: "bo2", definition: "museum" },
        { char: "物", pinyin: "wu4", definition: "museum" },
        { char: "馆", pinyin: "guan3", definition: "museum" },
        { char: "更", pinyin: "geng4", definition: "more" },
        { char: "能", pinyin: "neng2", definition: "can" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "感", pinyin: "gan3", definition: "feel" },
        { char: "到", pinyin: "dao4", definition: "feel" },
        { char: "平", pinyin: "ping2", definition: "peace" },
        { char: "静", pinyin: "jing4", definition: "peace" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "退", pinyin: "tui4", definition: "retire" },
        { char: "休", pinyin: "xiu1", definition: "retire" },
        { char: "以", pinyin: "yi3", definition: "since" },
        { char: "来", pinyin: "lai2", definition: "since" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "生活", pinyin: "sheng1 huo2", definition: "life" },
        { char: "方", pinyin: "fang1", definition: "aspect" },
        { char: "式", pinyin: "shi4", definition: "style" },
        { char: "发", pinyin: "fa1", definition: "change" },
        { char: "生", pinyin: "sheng1", definition: "change" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "与", pinyin: "yu3", definition: "with" },
        { char: "妻", pinyin: "qi1", definition: "wife" },
        { char: "子", pinyin: "zi0", definition: "particle" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "早", pinyin: "zao3", definition: "morning" },
        { char: "起", pinyin: "qi3", definition: "wake up" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "广", pinyin: "guang3", definition: "square" },
        { char: "场", pinyin: "chang3", definition: "square" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "一", pinyin: "yi1", definition: "together" },
        { char: "起", pinyin: "qi3", definition: "together" },
        { char: "练", pinyin: "lian4", definition: "practice" },
        { char: "习", pinyin: "xi2", definition: "practice" },
        { char: "太", pinyin: "tai4", definition: "tai chi" },
        { char: "极", pinyin: "ji2", definition: "tai chi" },
        { char: "拳", pinyin: "quan2", definition: "tai chi" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "必", pinyin: "bi4", definition: "need" },
        { char: "为", pinyin: "wei4", definition: "for" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "减", pinyin: "jian3", definition: "lose" },
        { char: "肥", pinyin: "fei2", definition: "weight" },
        { char: "而", pinyin: "er2", definition: "and" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "吃", pinyin: "chi1", definition: "eat" },
        { char: "晚", pinyin: "wan3", definition: "night" },
        { char: "饭", pinyin: "fan4", definition: "meal" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "科", pinyin: "ke1", definition: "scientific" },
        { char: "学", pinyin: "xue2", definition: "scientific" },
        { char: "地", pinyin: "de0", definition: "particle" },
        { char: "补", pinyin: "bu3", definition: "supplement" },
        { char: "充", pinyin: "chong1", definition: "supplement" },
        { char: "营", pinyin: "ying2", definition: "nutrition" },
        { char: "养", pinyin: "yang3", definition: "nutrition" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "注", pinyin: "zhu4", definition: "attention" },
        { char: "意", pinyin: "yi4", definition: "attention" },
        { char: "睡眠", pinyin: "shui4 mian2", definition: "sleep" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "身", pinyin: "shen1", definition: "body" },
        { char: "体", pinyin: "ti3", definition: "body" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "然", pinyin: "ran2", definition: "nature" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "变", pinyin: "bian4", definition: "become" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "博", pinyin: "bo2", definition: "museum" },
        { char: "物", pinyin: "wu4", definition: "museum" },
        { char: "馆", pinyin: "guan3", definition: "museum" },
        { char: "门", pinyin: "men2", definition: "door" },
        { char: "口", pinyin: "kou3", definition: "mouth" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "看", pinyin: "kan4", definition: "saw" },
        { char: "到", pinyin: "dao4", definition: "at" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "吸", pinyin: "xi1", definition: "smoke" },
        { char: "烟", pinyin: "yan1", definition: "smoke" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我们", pinyin: "wo3 men0", definition: "we" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "能", pinyin: "neng2", definition: "can" },
        { char: "太", pinyin: "tai4", definition: "too" },
        { char: "随", pinyin: "sui2", definition: "casual" },
        { char: "便", pinyin: "bian4", definition: "casual" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "必须", pinyin: "bi4 xu1", definition: "must" },
        { char: "注", pinyin: "zhu4", definition: "attention" },
        { char: "意", pinyin: "yi4", definition: "attention" },
        { char: "公", pinyin: "gong1", definition: "public" },
        { char: "共", pinyin: "gong4", definition: "public" },
        { char: "场", pinyin: "chang3", definition: "place" },
        { char: "合", pinyin: "he2", definition: "place" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "打", pinyin: "da3", definition: "do" },
        { char: "太", pinyin: "tai4", definition: "tai chi" },
        { char: "极", pinyin: "ji2", definition: "tai chi" },
        { char: "拳", pinyin: "quan2", definition: "tai chi" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "动", pinyin: "dong4", definition: "movement" },
        { char: "作", pinyin: "zuo4", definition: "movement" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "于", pinyin: "yu2", definition: "to" },
        { char: "随", pinyin: "sui2", definition: "casual" },
        { char: "便", pinyin: "bian4", definition: "casual" },
        { char: "动", pinyin: "dong4", definition: "move" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "下", pinyin: "xia4", definition: "down" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "只", pinyin: "zhi3", definition: "as long as" },
        { char: "要", pinyin: "yao4", definition: "as long as" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "重", pinyin: "zhong4", definition: "importance" },
        { char: "视", pinyin: "shi4", definition: "importance" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "个", pinyin: "ge4", definition: "measure" },
        { char: "方", pinyin: "fang1", definition: "aspect" },
        { char: "面", pinyin: "mian4", definition: "aspect" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "你", pinyin: "ni3", definition: "you" },
        { char: "就", pinyin: "jiu4", definition: "then" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "进", pinyin: "jin4", definition: "progress" },
        { char: "步", pinyin: "bu4", definition: "progress" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "夫", pinyin: "fu1", definition: "husband and wife" },
        { char: "妻", pinyin: "qi1", definition: "husband and wife" },
        { char: "两", pinyin: "liang3", definition: "two" },
        { char: "个", pinyin: "ge4", definition: "measure" },
        { char: "人", pinyin: "ren2", definition: "people" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "天", pinyin: "tian1", definition: "day" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "补", pinyin: "bu3", definition: "supplement" },
        { char: "充", pinyin: "chong1", definition: "supplement" },
        { char: "营", pinyin: "ying2", definition: "nutrition" },
        { char: "养", pinyin: "yang3", definition: "nutrition" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "they" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "即", pinyin: "ji2", definition: "even if" },
        { char: "使", pinyin: "shi3", definition: "even if" },
        { char: "退", pinyin: "tui4", definition: "retire" },
        { char: "休", pinyin: "xiu1", definition: "retire" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "重", pinyin: "zhong4", definition: "importance" },
        { char: "视", pinyin: "shi4", definition: "importance" },
        { char: "锻", pinyin: "duan4", definition: "exercise" },
        { char: "炼", pinyin: "lian4", definition: "exercise" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "于", pinyin: "yu2", definition: "to" },
        { char: "浪", pinyin: "lang4", definition: "waste" },
        { char: "费", pinyin: "fei4", definition: "waste" },
        { char: "时", pinyin: "shi2", definition: "time" },
        { char: "间", pinyin: "jian1", definition: "time" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
  },
  gender: {
    easy: [
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "相", pinyin: "xiang1", definition: "to believe" },
        { char: "信", pinyin: "xin4", definition: "to believe" },
        { char: "男", pinyin: "nan2", definition: "man" },
        { char: "女", pinyin: "nv3", definition: "woman" },
        { char: "平", pinyin: "ping2", definition: "equal" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "fair" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "丈", pinyin: "zhang4", definition: "husband" },
        { char: "夫", pinyin: "fu1", definition: "husband" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "妻", pinyin: "qi1", definition: "wife" },
        { char: "子", pinyin: "zi3", definition: "wife" },
        { char: "互", pinyin: "hu4", definition: "mutually" },
        { char: "相", pinyin: "xiang1", definition: "mutually" },
        { char: "爱", pinyin: "ai4", definition: "to love" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural marker" },
        { char: "做", pinyin: "zuo4", definition: "to do" },
        { char: "家", pinyin: "jia1", definition: "household chores" },
        { char: "务", pinyin: "wu4", definition: "household chores" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "工", pinyin: "gong1", definition: "factory" },
        { char: "厂", pinyin: "chang3", definition: "factory" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "有", pinyin: "you2", definition: "has" },
        { char: "机", pinyin: "ji1", definition: "opportunity" },
        { char: "会", pinyin: "hui4", definition: "opportunity" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "妇", pinyin: "fu4", definition: "women" },
        { char: "女", pinyin: "nv3", definition: "women" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "兴", pinyin: "xing4", definition: "happy" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "讨", pinyin: "tao3", definition: "to dislike" },
        { char: "厌", pinyin: "yan4", definition: "to dislike" },
        { char: "输", pinyin: "shu1", definition: "to lose" },
        { char: "球", pinyin: "qiu2", definition: "ball" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "想", pinyin: "xiang3", definition: "want" },
        { char: "赢", pinyin: "ying2", definition: "to win" },
        { char: "冠", pinyin: "guan4", definition: "champion" },
        { char: "军", pinyin: "jun1", definition: "champion" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "企", pinyin: "qi3", definition: "enterprise" },
        { char: "业", pinyin: "ye4", definition: "enterprise" },
        { char: "同", pinyin: "tong2", definition: "equal pay" },
        { char: "工", pinyin: "gong1", definition: "equal pay" },
        { char: "同", pinyin: "tong2", definition: "equal pay" },
        { char: "酬", pinyin: "chou2", definition: "equal pay" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "薪", pinyin: "xin1", definition: "salary" },
        { char: "水", pinyin: "shui3", definition: "salary" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "模", pinyin: "mo2", definition: "exemplary" },
        { char: "范", pinyin: "fan4", definition: "exemplary" },
        { char: "队", pinyin: "dui4", definition: "team member" },
        { char: "员", pinyin: "yuan2", definition: "team member" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "成", pinyin: "cheng2", definition: "performance" },
        { char: "绩", pinyin: "ji4", definition: "performance" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "情", pinyin: "qing2", definition: "situation" },
        { char: "况", pinyin: "kuang4", definition: "situation" },
        { char: "逐", pinyin: "zhu2", definition: "gradually" },
        { char: "渐", pinyin: "jian4", definition: "gradually" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "女", pinyin: "nv3", definition: "woman" },
        { char: "性", pinyin: "xing4", definition: "woman" },
        { char: "地", pinyin: "di4", definition: "status" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "西", pinyin: "xi1", definition: "Spain" },
        { char: "班", pinyin: "ban1", definition: "Spain" },
        { char: "牙", pinyin: "ya2", definition: "Spain" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "赢", pinyin: "ying2", definition: "to win" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "比", pinyin: "bi3", definition: "score" },
        { char: "分", pinyin: "fen1", definition: "score" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "三", pinyin: "san1", definition: "three" },
        { char: "比", pinyin: "bi3", definition: "to" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "骄", pinyin: "jiao1", definition: "proud" },
        { char: "傲", pinyin: "ao4", definition: "proud" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "看", pinyin: "kan4", definition: "to read" },
        { char: "新", pinyin: "xin1", definition: "news" },
        { char: "闻", pinyin: "wen2", definition: "news" },
        { char: "消", pinyin: "xiao1", definition: "message" },
        { char: "息", pinyin: "xi0", definition: "message" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "打", pinyin: "da3", definition: "to play" },
        { char: "乒", pinyin: "ping1", definition: "ping pong" },
        { char: "乓", pinyin: "pang1", definition: "ping pong" },
        { char: "球", pinyin: "qiu2", definition: "ping pong" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "我", pinyin: "wo3", definition: "my" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "职", pinyin: "zhi2", definition: "occupation" },
        { char: "业", pinyin: "ye4", definition: "occupation" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
    medium: [
      [
        { char: "改", pinyin: "gai3", definition: "to reform" },
        { char: "革", pinyin: "ge2", definition: "and open up" },
        { char: "开", pinyin: "kai1", definition: "to reform" },
        { char: "放", pinyin: "fang4", definition: "and open up" },
        { char: "以", pinyin: "yi3", definition: "since" },
        { char: "来", pinyin: "lai2", definition: "since" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "妇", pinyin: "fu4", definition: "women" },
        { char: "女", pinyin: "nv3", definition: "women" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "地", pinyin: "di4", definition: "position" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "逐", pinyin: "zhu2", definition: "gradually" },
        { char: "渐", pinyin: "jian4", definition: "little by little" },
        { char: "提", pinyin: "ti2", definition: "to raise" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "现", pinyin: "xian4", definition: "now" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "女", pinyin: "nv3", definition: "female gender" },
        { char: "性", pinyin: "xing4", definition: "woman" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "更", pinyin: "geng4", definition: "more" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "机", pinyin: "ji1", definition: "opportunity" },
        { char: "会", pinyin: "hui4", definition: "opportunity" },
        { char: "去", pinyin: "qu4", definition: "to go" },
        { char: "工", pinyin: "gong1", definition: "factory" },
        { char: "厂", pinyin: "chang3", definition: "factory" },
        { char: "工", pinyin: "gong1", definition: "to work" },
        { char: "作", pinyin: "zuo4", definition: "to work" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "企", pinyin: "qi3", definition: "enterprise" },
        { char: "业", pinyin: "ye4", definition: "business" },
        { char: "中", pinyin: "zhong1", definition: "in" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "丈", pinyin: "zhang4", definition: "husband" },
        { char: "夫", pinyin: "fu1", definition: "husband" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "妻", pinyin: "qi1", definition: "wife" },
        { char: "子", pinyin: "zi3", definition: "wife" },
        { char: "实", pinyin: "shi2", definition: "to implement" },
        { char: "现", pinyin: "xian4", definition: "realize" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "同", pinyin: "tong2", definition: "equal" },
        { char: "工", pinyin: "gong1", definition: "pay" },
        { char: "同", pinyin: "tong2", definition: "for equal" },
        { char: "酬", pinyin: "chou2", definition: "work" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "相", pinyin: "xiang1", definition: "to believe" },
        { char: "信", pinyin: "xin4", definition: "to trust" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "just" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "重", pinyin: "zhong4", definition: "important" },
        { char: "要", pinyin: "yao4", definition: "important" },
        { char: "的", pinyin: "de0", definition: "particle" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "模", pinyin: "mo2", definition: "exemplary" },
        { char: "范", pinyin: "fan4", definition: "model" },
        { char: "单", pinyin: "dan1", definition: "unit" },
        { char: "位", pinyin: "wei4", definition: "unit" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "男", pinyin: "nan2", definition: "man" },
        { char: "子", pinyin: "zi3", definition: "male" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "性", pinyin: "xing4", definition: "gender" },
        { char: "互", pinyin: "hu4", definition: "mutually" },
        { char: "相", pinyin: "xiang1", definition: "each other" },
        { char: "帮", pinyin: "bang1", definition: "to help" },
        { char: "助", pinyin: "zhu4", definition: "to help" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        {
          char: "重",
          pinyin: "zhong4",
          definition: "to regard males as superior",
        },
        {
          char: "男",
          pinyin: "nan2",
          definition: "to regard males as superior",
        },
        {
          char: "轻",
          pinyin: "qing1",
          definition: "to privilege men over women",
        },
        {
          char: "女",
          pinyin: "nv3",
          definition: "to privilege men over women",
        },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "现", pinyin: "xian4", definition: "phenomenon" },
        { char: "象", pinyin: "xiang4", definition: "appearance" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "再", pinyin: "zai4", definition: "again" },
        { char: "出", pinyin: "chu1", definition: "to appear" },
        { char: "现", pinyin: "xian4", definition: "to arise" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "乒", pinyin: "ping1", definition: "ping" },
        { char: "乓", pinyin: "pang1", definition: "pong" },
        { char: "球", pinyin: "qiu2", definition: "ball" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "成", pinyin: "cheng2", definition: "performance" },
        { char: "绩", pinyin: "ji4", definition: "achievement" },
        { char: "非", pinyin: "fei1", definition: "very" },
        { char: "常", pinyin: "chang2", definition: "very" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "they" },
        { char: "们", pinyin: "men0", definition: "plural particle" },
        { char: "赢", pinyin: "ying2", definition: "to win" },
        { char: "得", pinyin: "de2", definition: "attain" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "冠", pinyin: "guan4", definition: "champion" },
        { char: "军", pinyin: "jun1", definition: "first place" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "队", pinyin: "dui4", definition: "team member" },
        { char: "员", pinyin: "yuan2", definition: "team member" },
        { char: "们", pinyin: "men0", definition: "plural particle" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "感", pinyin: "gan3", definition: "to feel" },
        { char: "到", pinyin: "dao4", definition: "to feel" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "骄", pinyin: "jiao1", definition: "proud" },
        { char: "傲", pinyin: "ao4", definition: "arrogant" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "讨", pinyin: "tao3", definition: "to dislike" },
        { char: "厌", pinyin: "yan4", definition: "to loathe" },
        { char: "做", pinyin: "zuo4", definition: "to do" },
        { char: "家", pinyin: "jia1", definition: "household" },
        { char: "务", pinyin: "wu4", definition: "chores" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "中", pinyin: "zhong1", definition: "inside" },
        { char: "平", pinyin: "ping2", definition: "equal" },
        { char: "等", pinyin: "deng3", definition: "equality" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "重", pinyin: "zhong4", definition: "important" },
        { char: "要", pinyin: "yao4", definition: "important" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "表", pinyin: "biao3", definition: "to display" },
        { char: "现", pinyin: "xian4", definition: "to manifest" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "妻", pinyin: "qi1", definition: "wife" },
        { char: "子", pinyin: "zi3", definition: "wife" },
        { char: "高", pinyin: "gao1", definition: "happy" },
        { char: "兴", pinyin: "xing4", definition: "happy" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "根", pinyin: "gen1", definition: "according to" },
        { char: "据", pinyin: "ju4", definition: "according to" },
        { char: "消", pinyin: "xiao1", definition: "news" },
        { char: "息", pinyin: "xi0", definition: "message" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "德", pinyin: "de2", definition: "Germany" },
        { char: "国", pinyin: "guo2", definition: "Germany" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "输", pinyin: "shu1", definition: "to lose" },
        { char: "给", pinyin: "gei3", definition: "to" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "西", pinyin: "xi1", definition: "Spain" },
        { char: "班", pinyin: "ban1", definition: "Spain" },
        { char: "牙", pinyin: "ya2", definition: "Spain" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "种", pinyin: "zhong3", definition: "kind" },
        { char: "情", pinyin: "qing2", definition: "situation" },
        { char: "况", pinyin: "kuang4", definition: "condition" },
        { char: "由", pinyin: "you2", definition: "by" },
        { char: "比", pinyin: "bi3", definition: "score" },
        { char: "分", pinyin: "fen1", definition: "score" },
        { char: "决", pinyin: "jue2", definition: "decide" },
        { char: "定", pinyin: "ding4", definition: "decide" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "职", pinyin: "zhi2", definition: "occupation" },
        { char: "业", pinyin: "ye4", definition: "profession" },
        { char: "市", pinyin: "shi4", definition: "market" },
        { char: "场", pinyin: "chang3", definition: "market" },
        { char: "上", pinyin: "shang4", definition: "on" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "女", pinyin: "nv3", definition: "woman" },
        { char: "性", pinyin: "xing4", definition: "female" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "薪", pinyin: "xin1", definition: "salary" },
        { char: "水", pinyin: "shui3", definition: "pay" },
        { char: "有", pinyin: "you3", definition: "has" },
        { char: "时", pinyin: "shi2", definition: "sometimes" },
        { char: "超", pinyin: "chao1", definition: "to surpass" },
        { char: "过", pinyin: "guo4", definition: "to exceed" },
        { char: "男", pinyin: "nan2", definition: "man" },
        { char: "性", pinyin: "xing4", definition: "male" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "everyone" },
        { char: "家", pinyin: "jia1", definition: "everyone" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "相", pinyin: "xiang1", definition: "to believe" },
        { char: "信", pinyin: "xin4", definition: "to trust" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "just" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "企", pinyin: "qi3", definition: "enterprise" },
        { char: "业", pinyin: "ye4", definition: "business" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "成", pinyin: "cheng2", definition: "performance" },
        { char: "绩", pinyin: "ji4", definition: "achievement" },
        { char: "由", pinyin: "you2", definition: "by" },
        { char: "女", pinyin: "nv3", definition: "women" },
        { char: "工", pinyin: "gong1", definition: "workers" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "男", pinyin: "nan2", definition: "men" },
        { char: "工", pinyin: "gong1", definition: "workers" },
        { char: "共", pinyin: "gong4", definition: "together" },
        { char: "同", pinyin: "tong2", definition: "together" },
        { char: "创", pinyin: "chuang4", definition: "create" },
        { char: "造", pinyin: "zao4", definition: "create" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "种", pinyin: "zhong3", definition: "kind" },
        { char: "现", pinyin: "xian4", definition: "phenomenon" },
        { char: "象", pinyin: "xiang4", definition: "appearance" },
        { char: "说", pinyin: "shuo1", definition: "says" },
        { char: "明", pinyin: "ming2", definition: "clearly" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "平", pinyin: "ping2", definition: "equal" },
        { char: "等", pinyin: "deng3", definition: "equality" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "自", pinyin: "zi4", definition: "from" },
        { char: "改", pinyin: "gai3", definition: "to reform" },
        { char: "革", pinyin: "ge2", definition: "and open up" },
        { char: "开", pinyin: "kai1", definition: "to reform" },
        { char: "放", pinyin: "fang4", definition: "and open up" },
        { char: "以", pinyin: "yi3", definition: "since" },
        { char: "来", pinyin: "lai2", definition: "since" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "情", pinyin: "qing2", definition: "situation" },
        { char: "况", pinyin: "kuang4", definition: "condition" },
        { char: "发", pinyin: "fa1", definition: "happen" },
        { char: "生", pinyin: "sheng1", definition: "happen" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "妇", pinyin: "fu4", definition: "women" },
        { char: "女", pinyin: "nv3", definition: "women" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "单", pinyin: "dan1", definition: "unit" },
        { char: "位", pinyin: "wei4", definition: "unit" },
        { char: "中", pinyin: "zhong1", definition: "in" },
        { char: "地", pinyin: "di4", definition: "position" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "德", pinyin: "de2", definition: "Germany" },
        { char: "国", pinyin: "guo2", definition: "Germany" },
        { char: "队", pinyin: "dui4", definition: "team member" },
        { char: "员", pinyin: "yuan2", definition: "team member" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "市", pinyin: "shi4", definition: "market" },
        { char: "场", pinyin: "chang3", definition: "market" },
        { char: "里", pinyin: "li3", definition: "in" },
        { char: "看", pinyin: "kan4", definition: "look" },
        { char: "到", pinyin: "dao4", definition: "at" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "消", pinyin: "xiao1", definition: "news" },
        { char: "息", pinyin: "xi0", definition: "message" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural particle" },
        { char: "赢", pinyin: "ying2", definition: "to win" },
        { char: "得", pinyin: "de2", definition: "attained" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "更", pinyin: "geng4", definition: "more" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "的", pinyin: "de0", definition: "particle" },
        { char: "比", pinyin: "bi3", definition: "score" },
        { char: "分", pinyin: "fen1", definition: "score" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
    hard: [
      [
        { char: "自", pinyin: "zi4", definition: "from, self" },
        { char: "改", pinyin: "gai3", definition: "to reform" },
        { char: "革", pinyin: "ge2", definition: "revolution" },
        { char: "开", pinyin: "kai1", definition: "to open" },
        { char: "放", pinyin: "fang4", definition: "to release" },
        { char: "以", pinyin: "yi3", definition: "since" },
        { char: "来", pinyin: "lai2", definition: "to come" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "妇", pinyin: "fu4", definition: "woman" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "地", pinyin: "di4", definition: "earth, ground" },
        { char: "位", pinyin: "wei4", definition: "position" },
        { char: "逐", pinyin: "zhu2", definition: "gradually" },
        { char: "渐", pinyin: "jian4", definition: "gradually" },
        { char: "提", pinyin: "ti2", definition: "to lift" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "现", pinyin: "xian4", definition: "current" },
        { char: "代", pinyin: "dai4", definition: "era" },
        { char: "企", pinyin: "qi3", definition: "to plan" },
        { char: "业", pinyin: "ye4", definition: "business" },
        { char: "中", pinyin: "zhong1", definition: "middle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "性", pinyin: "xing4", definition: "nature, sex" },
        { char: "获", pinyin: "huo4", definition: "to obtain" },
        { char: "得", pinyin: "de2", definition: "to get" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "更", pinyin: "geng4", definition: "more" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "机", pinyin: "ji1", definition: "machine" },
        { char: "会", pinyin: "hui4", definition: "opportunity" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "种", pinyin: "zhong3", definition: "kind" },
        { char: "情", pinyin: "qing2", definition: "feeling" },
        { char: "况", pinyin: "kuang4", definition: "situation" },
        { char: "体", pinyin: "ti3", definition: "body" },
        { char: "现", pinyin: "xian4", definition: "to manifest" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "社", pinyin: "she4", definition: "society" },
        { char: "会", pinyin: "hui4", definition: "meeting" },
        { char: "的", pinyin: "de0", definition: "possessive particle" },
        { char: "平", pinyin: "ping2", definition: "flat" },
        { char: "等", pinyin: "deng3", definition: "equal" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "correct" },
        { char: "重", pinyin: "zhong4", definition: "heavy" },
        { char: "男", pinyin: "nan2", definition: "male" },
        { char: "轻", pinyin: "qing1", definition: "light" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "现", pinyin: "xian4", definition: "current" },
        { char: "象", pinyin: "xiang4", definition: "appearance" },
        { char: "仍", pinyin: "reng2", definition: "still" },
        { char: "偶", pinyin: "ou3", definition: "accidentally" },
        { char: "尔", pinyin: "er3", definition: "thus" },
        { char: "出", pinyin: "chu1", definition: "out" },
        { char: "现", pinyin: "xian4", definition: "to appear" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "相", pinyin: "xiang1", definition: "mutual" },
        { char: "信", pinyin: "xin4", definition: "believe" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "酬", pinyin: "chou2", definition: "reward" },
        { char: "终", pinyin: "zhong1", definition: "end" },
        { char: "将", pinyin: "jiang1", definition: "will" },
        { char: "实", pinyin: "shi2", definition: "real" },
        { char: "现", pinyin: "xian4", definition: "to manifest" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "厂", pinyin: "chang3", definition: "factory" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "丈", pinyin: "zhang4", definition: "husband" },
        { char: "夫", pinyin: "fu1", definition: "man" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "妻", pinyin: "qi1", definition: "wife" },
        { char: "子", pinyin: "zi3", definition: "child" },
        { char: "互", pinyin: "hu4", definition: "mutual" },
        { char: "相", pinyin: "xiang1", definition: "each other" },
        { char: "支", pinyin: "zhi1", definition: "support" },
        { char: "持", pinyin: "chi2", definition: "hold" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural marker" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "职", pinyin: "zhi2", definition: "profession" },
        { char: "业", pinyin: "ye4", definition: "occupation" },
        { char: "成", pinyin: "cheng2", definition: "achievement" },
        { char: "绩", pinyin: "ji4", definition: "merit" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "出", pinyin: "chu1", definition: "out" },
        { char: "色", pinyin: "se4", definition: "color" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "没", pinyin: "mei2", definition: "not" },
        { char: "有", pinyin: "you3", definition: "have" },
        { char: "人", pinyin: "ren2", definition: "person" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "讨", pinyin: "tao3", definition: "to dislike" },
        { char: "厌", pinyin: "yan4", definition: "loathe" },
        { char: "对", pinyin: "dui4", definition: "towards" },
        { char: "方", pinyin: "fang1", definition: "side" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "丈", pinyin: "zhang4", definition: "husband" },
        { char: "夫", pinyin: "fu1", definition: "man" },
        { char: "主", pinyin: "zhu3", definition: "main" },
        { char: "动", pinyin: "dong4", definition: "move" },
        { char: "分", pinyin: "fen1", definition: "divide" },
        { char: "担", pinyin: "dan1", definition: "carry" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "务", pinyin: "wu4", definition: "affairs" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "表", pinyin: "biao3", definition: "to display" },
        { char: "现", pinyin: "xian4", definition: "to manifest" },
        { char: "得", pinyin: "de2", definition: "particle" },
        { char: "像", pinyin: "xiang4", definition: "like" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "模", pinyin: "mo2", definition: "model" },
        { char: "范", pinyin: "fan4", definition: "exemplary" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "单", pinyin: "dan1", definition: "unit" },
        { char: "位", pinyin: "wei4", definition: "position" },
        { char: "里", pinyin: "li3", definition: "inside" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "薪", pinyin: "xin1", definition: "salary" },
        { char: "水", pinyin: "shui3", definition: "water" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "just" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "好", pinyin: "hao3", definition: "good" },
        { char: "消", pinyin: "xiao1", definition: "news" },
        { char: "息", pinyin: "xi1", definition: "message" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "男", pinyin: "nan2", definition: "man" },
        { char: "子", pinyin: "zi3", definition: "male" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "比", pinyin: "bi3", definition: "compare" },
        { char: "赛", pinyin: "sai4", definition: "match" },
        { char: "中", pinyin: "zhong1", definition: "middle" },
        { char: "输", pinyin: "shu1", definition: "lose" },
        { char: "掉", pinyin: "diao4", definition: "drop" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "球", pinyin: "qiu2", definition: "ball" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "比", pinyin: "bi3", definition: "compare" },
        { char: "分", pinyin: "fen1", definition: "score" },
        { char: "落", pinyin: "luo4", definition: "fall" },
        { char: "后", pinyin: "hou4", definition: "behind" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "员", pinyin: "yuan2", definition: "member" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "并", pinyin: "bing4", definition: "and" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "骄", pinyin: "jiao1", definition: "proud" },
        { char: "傲", pinyin: "ao4", definition: "arrogant" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "而", pinyin: "er2", definition: "but" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "由", pinyin: "you2", definition: "by" },
        { char: "教", pinyin: "jiao4", definition: "teach" },
        { char: "练", pinyin: "lian4", definition: "train" },
        { char: "分", pinyin: "fen1", definition: "analyze" },
        { char: "析", pinyin: "xi1", definition: "analyze" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "相", pinyin: "xiang1", definition: "mutual" },
        { char: "信", pinyin: "xin4", definition: "believe" },
        { char: "下", pinyin: "xia4", definition: "next" },
        { char: "次", pinyin: "ci4", definition: "time" },
        { char: "能", pinyin: "neng2", definition: "can" },
        { char: "赢", pinyin: "ying2", definition: "win" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "乒", pinyin: "ping1", definition: "ping" },
        { char: "乓", pinyin: "pang1", definition: "pong" },
        { char: "球", pinyin: "qiu2", definition: "ball" },
        { char: "市", pinyin: "shi4", definition: "market" },
        { char: "场", pinyin: "chang3", definition: "place" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "德", pinyin: "de2", definition: "Germany" },
        { char: "国", pinyin: "guo2", definition: "country" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "西", pinyin: "xi1", definition: "Spain" },
        { char: "班", pinyin: "ban1", definition: "Spain" },
        { char: "牙", pinyin: "ya2", definition: "Spain" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "选", pinyin: "xuan3", definition: "select" },
        { char: "手", pinyin: "shou3", definition: "hand" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "强", pinyin: "qiang2", definition: "strong" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "家", pinyin: "jia1", definition: "measure word" },
        { char: "企", pinyin: "qi3", definition: "business" },
        { char: "业", pinyin: "ye4", definition: "enterprise" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "性", pinyin: "xing4", definition: "gender" },
        { char: "人", pinyin: "ren2", definition: "person" },
        { char: "数", pinyin: "shu4", definition: "number" },
        { char: "已", pinyin: "yi3", definition: "already" },
        { char: "经", pinyin: "jing1", definition: "already" },
        { char: "超", pinyin: "chao1", definition: "surpass" },
        { char: "过", pinyin: "guo4", definition: "exceed" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "男", pinyin: "nan2", definition: "male" },
        { char: "性", pinyin: "xing4", definition: "gender" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "correct" },
        { char: "过", pinyin: "guo4", definition: "past" },
        { char: "去", pinyin: "qu4", definition: "go" },
        { char: "存", pinyin: "cun2", definition: "exist" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "重", pinyin: "zhong4", definition: "heavy" },
        { char: "男", pinyin: "nan2", definition: "male" },
        { char: "轻", pinyin: "qing1", definition: "light" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "现", pinyin: "xian4", definition: "current" },
        { char: "象", pinyin: "xiang4", definition: "appearance" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "现", pinyin: "xian4", definition: "now" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "情", pinyin: "qing2", definition: "situation" },
        { char: "况", pinyin: "kuang4", definition: "condition" },
        { char: "完", pinyin: "wan2", definition: "complete" },
        { char: "全", pinyin: "quan2", definition: "entire" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "妇", pinyin: "fu4", definition: "woman" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "地", pinyin: "di4", definition: "position" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "和", pinyin: "he2", definition: "and" },
        { char: "薪", pinyin: "xin1", definition: "salary" },
        { char: "水", pinyin: "shui3", definition: "pay" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "达", pinyin: "da2", definition: "reach" },
        { char: "到", pinyin: "dao4", definition: "to" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "平", pinyin: "ping2", definition: "equal" },
        { char: "等", pinyin: "deng3", definition: "equality" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "单", pinyin: "dan1", definition: "unit" },
        { char: "位", pinyin: "wei4", definition: "position" },
        { char: "由", pinyin: "you2", definition: "by" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "位", pinyin: "wei4", definition: "measure word" },
        { char: "模", pinyin: "mo2", definition: "model" },
        { char: "范", pinyin: "fan4", definition: "exemplary" },
        { char: "员", pinyin: "yuan2", definition: "member" },
        { char: "工", pinyin: "gong1", definition: "worker" },
        { char: "组", pinyin: "zu3", definition: "organize" },
        { char: "成", pinyin: "cheng2", definition: "form" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "互", pinyin: "hu4", definition: "mutual" },
        { char: "相", pinyin: "xiang1", definition: "each other" },
        { char: "尊", pinyin: "zun1", definition: "respect" },
        { char: "重", pinyin: "zhong4", definition: "heavy" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "作", pinyin: "zuo4", definition: "job" },
        { char: "中", pinyin: "zhong1", definition: "middle" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "just" },
        { char: "竞", pinyin: "jing4", definition: "compete" },
        { char: "争", pinyin: "zheng1", definition: "strive" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "出", pinyin: "chu1", definition: "out" },
        { char: "现", pinyin: "xian4", definition: "appear" },
        { char: "任", pinyin: "ren4", definition: "any" },
        { char: "何", pinyin: "he2", definition: "what" },
        { char: "问", pinyin: "wen4", definition: "question" },
        { char: "题", pinyin: "ti2", definition: "topic" },
        { char: "时", pinyin: "shi2", definition: "time" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "big" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "积", pinyin: "ji1", definition: "accumulate" },
        { char: "极", pinyin: "ji2", definition: "extreme" },
        { char: "表", pinyin: "biao3", definition: "to display" },
        { char: "现", pinyin: "xian4", definition: "to manifest" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "因", pinyin: "yin1", definition: "because" },
        { char: "为", pinyin: "wei4", definition: "for" },
        { char: "输", pinyin: "shu1", definition: "losing" },
        { char: "而", pinyin: "er2", definition: "and" },
        { char: "骄", pinyin: "jiao1", definition: "proud" },
        { char: "傲", pinyin: "ao4", definition: "arrogant" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "那", pinyin: "na4", definition: "that" },
        { char: "名", pinyin: "ming2", definition: "name" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "性", pinyin: "xing4", definition: "gender" },
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "乒", pinyin: "ping1", definition: "ping" },
        { char: "乓", pinyin: "pang1", definition: "pong" },
        { char: "球", pinyin: "qiu2", definition: "ball" },
        { char: "决", pinyin: "jue2", definition: "decide" },
        { char: "赛", pinyin: "sai4", definition: "match" },
        { char: "中", pinyin: "zhong1", definition: "middle" },
        { char: "赢", pinyin: "ying2", definition: "won" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "冠", pinyin: "guan4", definition: "champion" },
        { char: "军", pinyin: "jun1", definition: "first place" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "消", pinyin: "xiao1", definition: "news" },
        { char: "息", pinyin: "xi1", definition: "message" },
        { char: "传", pinyin: "chuan2", definition: "spread" },
        { char: "遍", pinyin: "bian4", definition: "all over" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "工", pinyin: "gong1", definition: "factory" },
        { char: "厂", pinyin: "chang3", definition: "unit" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "她", pinyin: "ta1", definition: "she" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "成", pinyin: "cheng2", definition: "achievement" },
        { char: "绩", pinyin: "ji4", definition: "performance" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "员", pinyin: "yuan2", definition: "member" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "感", pinyin: "gan3", definition: "feel" },
        { char: "到", pinyin: "dao4", definition: "to" },
        { char: "骄", pinyin: "jiao1", definition: "proud" },
        { char: "傲", pinyin: "ao4", definition: "arrogant" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "她", pinyin: "ta1", definition: "she" },
        { char: "证", pinyin: "zheng4", definition: "prove" },
        { char: "明", pinyin: "ming2", definition: "clear" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "自", pinyin: "zi4", definition: "self" },
        { char: "己", pinyin: "ji3", definition: "self" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "地", pinyin: "di4", definition: "position" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "市", pinyin: "shi4", definition: "market" },
        { char: "场", pinyin: "chang3", definition: "place" },
        { char: "经", pinyin: "jing1", definition: "through" },
        { char: "济", pinyin: "ji4", definition: "economy" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "平", pinyin: "ping2", definition: "equal" },
        { char: "等", pinyin: "deng3", definition: "equality" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "职", pinyin: "zhi2", definition: "occupation" },
        { char: "业", pinyin: "ye4", definition: "profession" },
        { char: "机", pinyin: "ji1", definition: "opportunity" },
        { char: "会", pinyin: "hui4", definition: "meeting" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "酬", pinyin: "chou2", definition: "pay" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "基", pinyin: "ji1", definition: "basic" },
        { char: "本", pinyin: "ben3", definition: "origin" },
        { char: "情", pinyin: "qing2", definition: "situation" },
        { char: "况", pinyin: "kuang4", definition: "condition" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "我", pinyin: "wo3", definition: "I" },
        { char: "相", pinyin: "xiang1", definition: "mutual" },
        { char: "信", pinyin: "xin4", definition: "believe" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "性", pinyin: "xing4", definition: "gender" },
        { char: "可", pinyin: "ke3", definition: "can" },
        { char: "以", pinyin: "yi3", definition: "by" },
        { char: "超", pinyin: "chao1", definition: "surpass" },
        { char: "过", pinyin: "guo4", definition: "exceed" },
        { char: "男", pinyin: "nan2", definition: "male" },
        { char: "性", pinyin: "xing4", definition: "gender" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "大", pinyin: "da4", definition: "large" },
        { char: "家", pinyin: "jia1", definition: "home" },
        { char: "互", pinyin: "hu4", definition: "mutual" },
        { char: "相", pinyin: "xiang1", definition: "each other" },
        { char: "学", pinyin: "xue2", definition: "study" },
        { char: "习", pinyin: "xi2", definition: "practice" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "再", pinyin: "zai4", definition: "again" },
        { char: "讨", pinyin: "tao3", definition: "loathe" },
        { char: "厌", pinyin: "yan4", definition: "dislike" },
        { char: "竞", pinyin: "jing4", definition: "compete" },
        { char: "争", pinyin: "zheng1", definition: "strive" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "在", pinyin: "zai4", definition: "at" },
        { char: "德", pinyin: "de2", definition: "Germany" },
        { char: "国", pinyin: "guo2", definition: "country" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "许", pinyin: "xu3", definition: "many" },
        { char: "多", pinyin: "duo1", definition: "many" },
        { char: "妇", pinyin: "fu4", definition: "woman" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "地", pinyin: "di4", definition: "position" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "高", pinyin: "gao1", definition: "high" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "丈", pinyin: "zhang4", definition: "husband" },
        { char: "夫", pinyin: "fu1", definition: "man" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "常", pinyin: "chang2", definition: "often" },
        { char: "做", pinyin: "zuo4", definition: "do" },
        { char: "家", pinyin: "jia1", definition: "household" },
        { char: "务", pinyin: "wu4", definition: "chores" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "西", pinyin: "xi1", definition: "Spain" },
        { char: "班", pinyin: "ban1", definition: "Spain" },
        { char: "牙", pinyin: "ya2", definition: "Spain" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "出", pinyin: "chu1", definition: "out" },
        { char: "现", pinyin: "xian4", definition: "appear" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "样", pinyin: "yang4", definition: "kind" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "现", pinyin: "xian4", definition: "current" },
        { char: "象", pinyin: "xiang4", definition: "phenomenon" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "这", pinyin: "zhe4", definition: "this" },
        { char: "些", pinyin: "xie1", definition: "some" },
        { char: "单", pinyin: "dan1", definition: "unit" },
        { char: "位", pinyin: "wei4", definition: "position" },
        { char: "逐", pinyin: "zhu2", definition: "gradually" },
        { char: "渐", pinyin: "jian4", definition: "gradually" },
        { char: "实", pinyin: "shi2", definition: "real" },
        { char: "现", pinyin: "xian4", definition: "manifest" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "just" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "虽", pinyin: "sui1", definition: "although" },
        { char: "然", pinyin: "ran2", definition: "correct" },
        { char: "比", pinyin: "bi3", definition: "compare" },
        { char: "分", pinyin: "fen1", definition: "score" },
        { char: "输", pinyin: "shu1", definition: "lose" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "但", pinyin: "dan4", definition: "but" },
        { char: "队", pinyin: "dui4", definition: "team" },
        { char: "员", pinyin: "yuan2", definition: "member" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "表", pinyin: "biao3", definition: "to display" },
        { char: "现", pinyin: "xian4", definition: "to manifest" },
        { char: "仍", pinyin: "reng2", definition: "still" },
        { char: "是", pinyin: "shi4", definition: "is" },
        { char: "模", pinyin: "mo2", definition: "model" },
        { char: "范", pinyin: "fan4", definition: "exemplary" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "不", pinyin: "bu4", definition: "not" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "因", pinyin: "yin1", definition: "because" },
        { char: "为", pinyin: "wei4", definition: "for" },
        { char: "一", pinyin: "yi1", definition: "one" },
        { char: "次", pinyin: "ci4", definition: "time" },
        { char: "失", pinyin: "shi1", definition: "lose" },
        { char: "败", pinyin: "bai4", definition: "defeat" },
        { char: "而", pinyin: "er2", definition: "and" },
        { char: "讨", pinyin: "tao3", definition: "dislike" },
        { char: "厌", pinyin: "yan4", definition: "loathe" },
        { char: "比", pinyin: "bi3", definition: "compare" },
        { char: "赛", pinyin: "sai4", definition: "match" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "企", pinyin: "qi3", definition: "business" },
        { char: "业", pinyin: "ye4", definition: "enterprise" },
        { char: "也", pinyin: "ye3", definition: "also" },
        { char: "会", pinyin: "hui4", definition: "will" },
        { char: "给", pinyin: "gei3", definition: "give" },
        { char: "予", pinyin: "yu3", definition: "give" },
        { char: "他", pinyin: "ta1", definition: "he" },
        { char: "们", pinyin: "men0", definition: "plural" },
        { char: "重", pinyin: "zhong4", definition: "again" },
        { char: "新", pinyin: "xin1", definition: "new" },
        { char: "开", pinyin: "kai1", definition: "start" },
        { char: "始", pinyin: "shi3", definition: "begin" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "机", pinyin: "ji1", definition: "opportunity" },
        { char: "会", pinyin: "hui4", definition: "meeting" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
      [
        { char: "自", pinyin: "zi4", definition: "since" },
        { char: "改", pinyin: "gai3", definition: "reform" },
        { char: "革", pinyin: "ge2", definition: "reform" },
        { char: "开", pinyin: "kai1", definition: "open" },
        { char: "放", pinyin: "fang4", definition: "up" },
        { char: "以", pinyin: "yi3", definition: "since" },
        { char: "来", pinyin: "lai2", definition: "since" },
        { char: "，", pinyin: "，", definition: "punctuation" },
        { char: "中", pinyin: "zhong1", definition: "China" },
        { char: "国", pinyin: "guo2", definition: "China" },
        { char: "的", pinyin: "de0", definition: "possessive" },
        { char: "情", pinyin: "qing2", definition: "situation" },
        { char: "况", pinyin: "kuang4", definition: "condition" },
        { char: "变", pinyin: "bian4", definition: "change" },
        { char: "化", pinyin: "hua4", definition: "change" },
        { char: "很", pinyin: "hen3", definition: "very" },
        { char: "大", pinyin: "da4", definition: "large" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "重", pinyin: "zhong4", definition: "heavy" },
        { char: "男", pinyin: "nan2", definition: "male" },
        { char: "轻", pinyin: "qing1", definition: "light" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "已", pinyin: "yi3", definition: "already" },
        { char: "逐", pinyin: "zhu2", definition: "gradually" },
        { char: "渐", pinyin: "jian4", definition: "gradually" },
        { char: "消", pinyin: "xiao1", definition: "disappear" },
        { char: "失", pinyin: "shi1", definition: "lost" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "妇", pinyin: "fu4", definition: "woman" },
        { char: "女", pinyin: "nv3", definition: "female" },
        { char: "地", pinyin: "di4", definition: "position" },
        { char: "位", pinyin: "wei4", definition: "status" },
        { char: "超", pinyin: "chao1", definition: "surpass" },
        { char: "过", pinyin: "guo4", definition: "exceed" },
        { char: "了", pinyin: "le0", definition: "particle" },
        { char: "以", pinyin: "yi3", definition: "past" },
        { char: "前", pinyin: "qian2", definition: "before" },
        { char: "。", pinyin: "。", definition: "punctuation" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "工", pinyin: "gong1", definition: "work" },
        { char: "同", pinyin: "tong2", definition: "same" },
        { char: "酬", pinyin: "chou2", definition: "pay" },
        { char: "让", pinyin: "rang4", definition: "let" },
        { char: "每", pinyin: "mei3", definition: "every" },
        { char: "个", pinyin: "ge4", definition: "measure word" },
        { char: "人", pinyin: "ren2", definition: "person" },
        { char: "都", pinyin: "dou1", definition: "all" },
        { char: "感", pinyin: "gan3", definition: "feel" },
        { char: "到", pinyin: "dao4", definition: "to" },
        { char: "公", pinyin: "gong1", definition: "fair" },
        { char: "平", pinyin: "ping2", definition: "just" },
        { char: "。", pinyin: "。", definition: "punctuation" },
      ],
    ],
  },
  environment: {
    easy: [
      [
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "爬",
          pinyin: "pa2",
          definition: "to climb",
        },
        {
          char: "山",
          pinyin: "shan1",
          definition: "mountain",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "to have",
        },
        {
          char: "益",
          pinyin: "yi4",
          definition: "beneficial",
        },
        {
          char: "于",
          pinyin: "yu2",
          definition: "towards",
        },
        {
          char: "健",
          pinyin: "jian4",
          definition: "health",
        },
        {
          char: "康",
          pinyin: "kang1",
          definition: "health",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "to economize",
        },
        {
          char: "约",
          pinyin: "yue1",
          definition: "to economize",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "源",
          pinyin: "yuan2",
          definition: "energy",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "to protect",
        },
        {
          char: "护",
          pinyin: "hu4",
          definition: "to protect",
        },
        {
          char: "地",
          pinyin: "di4",
          definition: "earth",
        },
        {
          char: "球",
          pinyin: "qiu2",
          definition: "earth",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "马",
          pinyin: "ma3",
          definition: "Mark",
        },
        {
          char: "克",
          pinyin: "ke4",
          definition: "Mark",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "to hold",
        },
        {
          char: "瓶",
          pinyin: "ping2",
          definition: "bottle",
        },
        {
          char: "扔",
          pinyin: "reng1",
          definition: "to throw",
        },
        {
          char: "进",
          pinyin: "jin4",
          definition: "to enter",
        },
        {
          char: "回",
          pinyin: "hui2",
          definition: "to recycle",
        },
        {
          char: "收",
          pinyin: "shou1",
          definition: "to recycle",
        },
        {
          char: "筒",
          pinyin: "tong3",
          definition: "tube",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "太",
          pinyin: "tai4",
          definition: "sun",
        },
        {
          char: "阳",
          pinyin: "yang2",
          definition: "sun",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "板",
          pinyin: "ban3",
          definition: "board",
        },
        {
          char: "可",
          pinyin: "ke3",
          definition: "can",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "may",
        },
        {
          char: "发",
          pinyin: "fa1",
          definition: "to generate",
        },
        {
          char: "电",
          pinyin: "dian4",
          definition: "electricity",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "随",
          pinyin: "sui2",
          definition: "conveniently",
        },
        {
          char: "手",
          pinyin: "shou3",
          definition: "conveniently",
        },
        {
          char: "关",
          pinyin: "guan1",
          definition: "to close",
        },
        {
          char: "灯",
          pinyin: "deng1",
          definition: "light",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "不",
          pinyin: "bu4",
          definition: "not",
        },
        {
          char: "浪",
          pinyin: "lang4",
          definition: "waste",
        },
        {
          char: "费",
          pinyin: "fei4",
          definition: "waste",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "少",
          pinyin: "shao3",
          definition: "few",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "to use",
        },
        {
          char: "一",
          pinyin: "yi2",
          definition: "one",
        },
        {
          char: "次",
          pinyin: "ci4",
          definition: "time",
        },
        {
          char: "性",
          pinyin: "xing4",
          definition: "nature",
        },
        {
          char: "餐",
          pinyin: "can1",
          definition: "meal",
        },
        {
          char: "具",
          pinyin: "ju4",
          definition: "tool",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "减",
          pinyin: "jian3",
          definition: "to reduce",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "to reduce",
        },
        {
          char: "砍",
          pinyin: "kan3",
          definition: "to chop",
        },
        {
          char: "树",
          pinyin: "shu4",
          definition: "tree",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "雾",
          pinyin: "wu4",
          definition: "smog",
        },
        {
          char: "霾",
          pinyin: "mai2",
          definition: "smog",
        },
        {
          char: "造",
          pinyin: "zao4",
          definition: "to cause",
        },
        {
          char: "成",
          pinyin: "cheng2",
          definition: "to cause",
        },
        {
          char: "空",
          pinyin: "kong1",
          definition: "air",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "air",
        },
        {
          char: "污",
          pinyin: "wu1",
          definition: "pollute",
        },
        {
          char: "染",
          pinyin: "ran3",
          definition: "pollute",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "暖",
          pinyin: "nuan3",
          definition: "heating",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "heating",
        },
        {
          char: "温",
          pinyin: "wen1",
          definition: "temperature",
        },
        {
          char: "度",
          pinyin: "du4",
          definition: "degree",
        },
        {
          char: "调",
          pinyin: "tiao2",
          definition: "adjust",
        },
        {
          char: "低",
          pinyin: "di1",
          definition: "low",
        },
        {
          char: "一",
          pinyin: "yi4",
          definition: "one",
        },
        {
          char: "点",
          pinyin: "dian3",
          definition: "dot",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "大",
          pinyin: "da4",
          definition: "big",
        },
        {
          char: "家",
          pinyin: "jia1",
          definition: "home",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "must",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "for",
        },
        {
          char: "地",
          pinyin: "di4",
          definition: "earth",
        },
        {
          char: "球",
          pinyin: "qiu2",
          definition: "earth",
        },
        {
          char: "加",
          pinyin: "jia1",
          definition: "add",
        },
        {
          char: "油",
          pinyin: "you2",
          definition: "oil",
        },
        {
          char: "！",
          pinyin: "！",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "段",
          pinyin: "duan4",
          definition: "section",
        },
        {
          char: "路",
          pinyin: "lu4",
          definition: "road",
        },
        {
          char: "对",
          pinyin: "dui4",
          definition: "towards",
        },
        {
          char: "环",
          pinyin: "huan2",
          definition: "environment",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "protect",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "利",
          pinyin: "li4",
          definition: "benefit",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
    ],
    medium: [
      [
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "for",
        },
        {
          char: "空",
          pinyin: "kong1",
          definition: "air",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "air",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "雾",
          pinyin: "wu4",
          definition: "smog",
        },
        {
          char: "霾",
          pinyin: "mai2",
          definition: "smog",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "so",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "so",
        },
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "们",
          pinyin: "men5",
          definition: "plural marker",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "want",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "to protect",
        },
        {
          char: "护",
          pinyin: "hu4",
          definition: "to protect",
        },
        {
          char: "地",
          pinyin: "di4",
          definition: "earth",
        },
        {
          char: "球",
          pinyin: "qiu2",
          definition: "earth",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "愿",
          pinyin: "yuan4",
          definition: "willing",
        },
        {
          char: "意",
          pinyin: "yi4",
          definition: "meaning",
        },
        {
          char: "减",
          pinyin: "jian3",
          definition: "to reduce",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "to reduce",
        },
        {
          char: "污",
          pinyin: "wu1",
          definition: "to pollute",
        },
        {
          char: "染",
          pinyin: "ran3",
          definition: "to pollute",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "如",
          pinyin: "ru2",
          definition: "if",
        },
        {
          char: "果",
          pinyin: "guo3",
          definition: "if",
        },
        {
          char: "大",
          pinyin: "da4",
          definition: "big",
        },
        {
          char: "家",
          pinyin: "jia1",
          definition: "family",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "to save",
        },
        {
          char: "约",
          pinyin: "yue1",
          definition: "to save",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "源",
          pinyin: "yuan2",
          definition: "energy",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "地",
          pinyin: "di4",
          definition: "earth",
        },
        {
          char: "球",
          pinyin: "qiu2",
          definition: "earth",
        },
        {
          char: "就",
          pinyin: "jiu4",
          definition: "then",
        },
        {
          char: "更",
          pinyin: "geng4",
          definition: "more",
        },
        {
          char: "美",
          pinyin: "mei3",
          definition: "beautiful",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "beneficial",
        },
        {
          char: "益",
          pinyin: "yi4",
          definition: "beneficial",
        },
        {
          char: "于",
          pinyin: "yu2",
          definition: "towards",
        },
        {
          char: "未",
          pinyin: "wei4",
          definition: "future",
        },
        {
          char: "来",
          pinyin: "lai2",
          definition: "come",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "那",
          pinyin: "na4",
          definition: "that",
        },
        {
          char: "段",
          pinyin: "duan4",
          definition: "section",
        },
        {
          char: "路",
          pinyin: "lu4",
          definition: "road",
        },
        {
          char: "难",
          pinyin: "nan2",
          definition: "difficult",
        },
        {
          char: "走",
          pinyin: "zou3",
          definition: "walk",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "是",
          pinyin: "shi4",
          definition: "is",
        },
        {
          char: "爬",
          pinyin: "pa2",
          definition: "climb",
        },
        {
          char: "山",
          pinyin: "shan1",
          definition: "mountain",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "益",
          pinyin: "yi4",
          definition: "beneficial",
        },
        {
          char: "于",
          pinyin: "yu2",
          definition: "towards",
        },
        {
          char: "身",
          pinyin: "shen1",
          definition: "body",
        },
        {
          char: "体",
          pinyin: "ti3",
          definition: "body",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "去",
          pinyin: "qu4",
          definition: "go",
        },
        {
          char: "过",
          pinyin: "guo4",
          definition: "past",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "for",
        },
        {
          char: "垃",
          pinyin: "la1",
          definition: "trash",
        },
        {
          char: "圾",
          pinyin: "ji1",
          definition: "trash",
        },
        {
          char: "桶",
          pinyin: "tong3",
          definition: "tube",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "too",
        },
        {
          char: "远",
          pinyin: "yuan3",
          definition: "far",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "so",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "so",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "随",
          pinyin: "sui2",
          definition: "conveniently",
        },
        {
          char: "手",
          pinyin: "shou3",
          definition: "hand",
        },
        {
          char: "扔",
          pinyin: "reng1",
          definition: "throw",
        },
        {
          char: "瓶",
          pinyin: "ping2",
          definition: "bottle",
        },
        {
          char: "装",
          pinyin: "zhuang1",
          definition: "bottle",
        },
        {
          char: "水",
          pinyin: "shui3",
          definition: "water",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "回",
          pinyin: "hui2",
          definition: "recycle",
        },
        {
          char: "收",
          pinyin: "shou1",
          definition: "recycle",
        },
        {
          char: "重",
          pinyin: "zhong4",
          definition: "important",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "important",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "太",
          pinyin: "tai4",
          definition: "sun",
        },
        {
          char: "阳",
          pinyin: "yang2",
          definition: "sun",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "板",
          pinyin: "ban3",
          definition: "board",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "亮",
          pinyin: "liang4",
          definition: "bright",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "它",
          pinyin: "ta1",
          definition: "it",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "can",
        },
        {
          char: "发",
          pinyin: "fa1",
          definition: "generate",
        },
        {
          char: "电",
          pinyin: "dian4",
          definition: "electricity",
        },
        {
          char: "解",
          pinyin: "jie3",
          definition: "solve",
        },
        {
          char: "决",
          pinyin: "jue2",
          definition: "solve",
        },
        {
          char: "危",
          pinyin: "wei1",
          definition: "crisis",
        },
        {
          char: "机",
          pinyin: "ji1",
          definition: "crisis",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "国",
          pinyin: "guo2",
          definition: "country",
        },
        {
          char: "家",
          pinyin: "jia1",
          definition: "country",
        },
        {
          char: "支",
          pinyin: "zhi1",
          definition: "support",
        },
        {
          char: "持",
          pinyin: "chi2",
          definition: "support",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "暖",
          pinyin: "nuan3",
          definition: "heating",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "heating",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "温",
          pinyin: "wen1",
          definition: "temperature",
        },
        {
          char: "度",
          pinyin: "du4",
          definition: "degree",
        },
        {
          char: "不",
          pinyin: "bu2",
          definition: "not",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "can",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "too",
        },
        {
          char: "高",
          pinyin: "gao1",
          definition: "high",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "赞",
          pinyin: "zan4",
          definition: "approve",
        },
        {
          char: "成",
          pinyin: "cheng2",
          definition: "approve",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "规",
          pinyin: "gui1",
          definition: "regulate",
        },
        {
          char: "定",
          pinyin: "ding4",
          definition: "regulate",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "马",
          pinyin: "ma3",
          definition: "Mark",
        },
        {
          char: "克",
          pinyin: "ke4",
          definition: "Mark",
        },
        {
          char: "在",
          pinyin: "zai4",
          definition: "at",
        },
        {
          char: "公",
          pinyin: "gong1",
          definition: "public",
        },
        {
          char: "共",
          pinyin: "gong4",
          definition: "public",
        },
        {
          char: "场",
          pinyin: "chang3",
          definition: "place",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "place",
        },
        {
          char: "如",
          pinyin: "ru2",
          definition: "if",
        },
        {
          char: "果",
          pinyin: "guo3",
          definition: "if",
        },
        {
          char: "热",
          pinyin: "re4",
          definition: "hot",
        },
        {
          char: "就",
          pinyin: "jiu4",
          definition: "then",
        },
        {
          char: "会",
          pinyin: "hui4",
          definition: "will",
        },
        {
          char: "出",
          pinyin: "chu1",
          definition: "sweat",
        },
        {
          char: "汗",
          pinyin: "han4",
          definition: "sweat",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "喜",
          pinyin: "xi3",
          definition: "like",
        },
        {
          char: "欢",
          pinyin: "huan1",
          definition: "like",
        },
        {
          char: "凉",
          pinyin: "liang2",
          definition: "cool",
        },
        {
          char: "快",
          pinyin: "kuai4",
          definition: "cool",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "为",
          pinyin: "wei4",
          definition: "for",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "减",
          pinyin: "jian3",
          definition: "reduce",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "reduce",
        },
        {
          char: "污",
          pinyin: "wu1",
          definition: "pollute",
        },
        {
          char: "染",
          pinyin: "ran3",
          definition: "pollute",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "不",
          pinyin: "bu4",
          definition: "not",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "use",
        },
        {
          char: "一",
          pinyin: "yi2",
          definition: "one",
        },
        {
          char: "次",
          pinyin: "ci4",
          definition: "time",
        },
        {
          char: "性",
          pinyin: "xing4",
          definition: "nature",
        },
        {
          char: "餐",
          pinyin: "can1",
          definition: "meal",
        },
        {
          char: "具",
          pinyin: "ju4",
          definition: "utensil",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "for",
        },
        {
          char: "砍",
          pinyin: "kan3",
          definition: "cut",
        },
        {
          char: "树",
          pinyin: "shu4",
          definition: "tree",
        },
        {
          char: "多",
          pinyin: "duo1",
          definition: "many",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "so",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "so",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "must",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "reduce",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "use",
        },
        {
          char: "塑",
          pinyin: "su4",
          definition: "plastic",
        },
        {
          char: "料",
          pinyin: "liao4",
          definition: "material",
        },
        {
          char: "袋",
          pinyin: "dai4",
          definition: "bag",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "去",
          pinyin: "qu4",
          definition: "go",
        },
        {
          char: "超",
          pinyin: "chao1",
          definition: "super",
        },
        {
          char: "市",
          pinyin: "shi4",
          definition: "market",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "油",
          pinyin: "you2",
          definition: "oil",
        },
        {
          char: "价",
          pinyin: "jia4",
          definition: "price",
        },
        {
          char: "高",
          pinyin: "gao1",
          definition: "high",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "们",
          pinyin: "men5",
          definition: "plural",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "must",
        },
        {
          char: "加",
          pinyin: "jia1",
          definition: "add",
        },
        {
          char: "油",
          pinyin: "you2",
          definition: "effort",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "protect",
        },
        {
          char: "护",
          pinyin: "hu4",
          definition: "protect",
        },
        {
          char: "空",
          pinyin: "kong1",
          definition: "air",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "air",
        },
        {
          char: "。，",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "加",
          pinyin: "jia1",
          definition: "add",
        },
        {
          char: "油",
          pinyin: "you2",
          definition: "effort",
        },
        {
          char: "啊",
          pinyin: "a5",
          definition: "particle",
        },
        {
          char: "！",
          pinyin: "！",
          definition: "punctuation",
        },
      ],
    ],
    hard: [
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "推",
          pinyin: "tui1",
          definition: "to push",
        },
        {
          char: "开",
          pinyin: "kai1",
          definition: "to open",
        },
        {
          char: "窗",
          pinyin: "chuang1",
          definition: "window",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "看",
          pinyin: "kan4",
          definition: "to see",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "to reach/attain",
        },
        {
          char: "雾",
          pinyin: "wu4",
          definition: "fog",
        },
        {
          char: "霾",
          pinyin: "mai2",
          definition: "smog",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "重",
          pinyin: "zhong4",
          definition: "heavy",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "然后",
          pinyin: "ran2hou4",
          definition: "then",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "marker",
        },
        {
          char: "瓶",
          pinyin: "ping2",
          definition: "bottle",
        },
        {
          char: "装",
          pinyin: "zhuang1",
          definition: "loaded",
        },
        {
          char: "水",
          pinyin: "shui3",
          definition: "water",
        },
        {
          char: "放",
          pinyin: "fang4",
          definition: "to place",
        },
        {
          char: "回",
          pinyin: "hui2",
          definition: "to return",
        },
        {
          char: "桶",
          pinyin: "tong3",
          definition: "thick tube-shaped container",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最后",
          pinyin: "zui4hou4",
          definition: "finally",
        },
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "懂",
          pinyin: "dong3",
          definition: "to understand",
        },
        {
          char: "得",
          pinyin: "de5",
          definition: "particle",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "to protect",
        },
        {
          char: "护",
          pinyin: "hu4",
          definition: "to protect",
        },
        {
          char: "空",
          pinyin: "kong1",
          definition: "air",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "air",
        },
        {
          char: "的",
          pinyin: "de5",
          definition: "particle",
        },
        {
          char: "紧",
          pinyin: "jin3",
          definition: "tight",
        },
        {
          char: "急",
          pinyin: "ji2",
          definition: "urgent",
        },
        {
          char: "性",
          pinyin: "xing4",
          definition: "nature",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "由",
          pinyin: "you2",
          definition: "from",
        },
        {
          char: "政",
          pinyin: "zheng4",
          definition: "government",
        },
        {
          char: "府",
          pinyin: "fu3",
          definition: "government",
        },
        {
          char: "规",
          pinyin: "gui1",
          definition: "to regulate",
        },
        {
          char: "定",
          pinyin: "ding4",
          definition: "to specify",
        },
        {
          char: "温",
          pinyin: "wen1",
          definition: "temperature",
        },
        {
          char: "度",
          pinyin: "du4",
          definition: "measure word",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "marker",
        },
        {
          char: "暖",
          pinyin: "nuan3",
          definition: "heating",
        },
        {
          char: "气",
          pinyin: "qi4",
          definition: "heating",
        },
        {
          char: "调",
          pinyin: "tiao2",
          definition: "to adjust",
        },
        {
          char: "低",
          pinyin: "di1",
          definition: "low",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "to save",
        },
        {
          char: "约",
          pinyin: "yue1",
          definition: "to save",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "源",
          pinyin: "yuan2",
          definition: "energy",
        },
        {
          char: "的",
          pinyin: "de5",
          definition: "particle",
        },
        {
          char: "目",
          pinyin: "mu4",
          definition: "goal",
        },
        {
          char: "标",
          pinyin: "biao1",
          definition: "goal",
        },
        {
          char: "终",
          pinyin: "zhong1",
          definition: "finally",
        },
        {
          char: "于",
          pinyin: "yu2",
          definition: "in",
        },
        {
          char: "达",
          pinyin: "da2",
          definition: "to reach",
        },
        {
          char: "成",
          pinyin: "cheng2",
          definition: "to complete",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "去",
          pinyin: "qu4",
          definition: "to go",
        },
        {
          char: "爬",
          pinyin: "pa2",
          definition: "to climb",
        },
        {
          char: "山",
          pinyin: "shan1",
          definition: "mountain",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive marker",
        },
        {
          char: "那",
          pinyin: "na4",
          definition: "that",
        },
        {
          char: "段",
          pinyin: "duan4",
          definition: "section",
        },
        {
          char: "美",
          pinyin: "mei3",
          definition: "beautiful",
        },
        {
          char: "景",
          pinyin: "jing3",
          definition: "scenery",
        },
        {
          char: "吸",
          pinyin: "xi1",
          definition: "to attract",
        },
        {
          char: "引",
          pinyin: "yin3",
          definition: "to attract",
        },
        {
          char: "住",
          pinyin: "zhu4",
          definition: "to stay",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "种",
          pinyin: "zhong3",
          definition: "kind",
        },
        {
          char: "运",
          pinyin: "yun4",
          definition: "movement",
        },
        {
          char: "动",
          pinyin: "dong4",
          definition: "movement",
        },
        {
          char: "对",
          pinyin: "dui4",
          definition: "towards",
        },
        {
          char: "心",
          pinyin: "xin1",
          definition: "heart",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "psychology",
        },
        {
          char: "极",
          pinyin: "ji2",
          definition: "very",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "益",
          pinyin: "yi4",
          definition: "beneficial",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "购",
          pinyin: "gou4",
          definition: "to buy",
        },
        {
          char: "置",
          pinyin: "zhi4",
          definition: "to put",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "sun",
        },
        {
          char: "阳",
          pinyin: "yang2",
          definition: "sun",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "板",
          pinyin: "ban3",
          definition: "board",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "marker",
        },
        {
          char: "光",
          pinyin: "guang1",
          definition: "light",
        },
        {
          char: "转",
          pinyin: "zhuan3",
          definition: "to turn",
        },
        {
          char: "换",
          pinyin: "huan4",
          definition: "to change",
        },
        {
          char: "为",
          pinyin: "wei2",
          definition: "to be",
        },
        {
          char: "电",
          pinyin: "dian4",
          definition: "electricity",
        },
        {
          char: "力",
          pinyin: "li4",
          definition: "force",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "地",
          pinyin: "di4",
          definition: "earth",
        },
        {
          char: "球",
          pinyin: "qiu2",
          definition: "ball",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive marker",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "to protect",
        },
        {
          char: "护",
          pinyin: "hu4",
          definition: "to protect",
        },
        {
          char: "得",
          pinyin: "de5",
          definition: "particle",
        },
        {
          char: "完",
          pinyin: "wan2",
          definition: "complete",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "认",
          pinyin: "ren4",
          definition: "to recognize",
        },
        {
          char: "识",
          pinyin: "shi2",
          definition: "to know",
        },
        {
          char: "危",
          pinyin: "wei1",
          definition: "crisis",
        },
        {
          char: "机",
          pinyin: "ji1",
          definition: "crisis",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "国",
          pinyin: "guo2",
          definition: "country",
        },
        {
          char: "家",
          pinyin: "jia1",
          definition: "family",
        },
        {
          char: "减",
          pinyin: "jian3",
          definition: "to reduce",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "few",
        },
        {
          char: "对",
          pinyin: "dui4",
          definition: "towards",
        },
        {
          char: "煤",
          pinyin: "mei2",
          definition: "coal",
        },
        {
          char: "炭",
          pinyin: "tan4",
          definition: "charcoal",
        },
        {
          char: "依",
          pinyin: "yi1",
          definition: "to depend",
        },
        {
          char: "赖",
          pinyin: "lai4",
          definition: "to rely",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "清",
          pinyin: "qing1",
          definition: "clean",
        },
        {
          char: "洁",
          pinyin: "jie2",
          definition: "clean",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "源",
          pinyin: "yuan2",
          definition: "energy",
        },
        {
          char: "取",
          pinyin: "qu3",
          definition: "to take",
        },
        {
          char: "代",
          pinyin: "dai4",
          definition: "to replace",
        },
        {
          char: "石",
          pinyin: "shi2",
          definition: "rock",
        },
        {
          char: "油",
          pinyin: "you2",
          definition: "oil",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "marker",
        },
        {
          char: "餐",
          pinyin: "can1",
          definition: "meal",
        },
        {
          char: "具",
          pinyin: "ju4",
          definition: "utensil",
        },
        {
          char: "洗",
          pinyin: "xi3",
          definition: "to wash",
        },
        {
          char: "净",
          pinyin: "jing4",
          definition: "clean",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "扔",
          pinyin: "reng1",
          definition: "to throw",
        },
        {
          char: "进",
          pinyin: "jin4",
          definition: "to enter",
        },
        {
          char: "回",
          pinyin: "hui2",
          definition: "to return",
        },
        {
          char: "收",
          pinyin: "shou1",
          definition: "to gather",
        },
        {
          char: "桶",
          pinyin: "tong3",
          definition: "bucket",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "些",
          pinyin: "xie1",
          definition: "some",
        },
        {
          char: "废",
          pinyin: "fei4",
          definition: "waste",
        },
        {
          char: "品",
          pinyin: "pin3",
          definition: "product",
        },
        {
          char: "再",
          pinyin: "zai4",
          definition: "again",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive marker",
        },
        {
          char: "利",
          pinyin: "li4",
          definition: "benefit",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "to use",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "看",
          pinyin: "kan4",
          definition: "to see",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "to reach",
        },
        {
          char: "一",
          pinyin: "yi2",
          definition: "one",
        },
        {
          char: "次",
          pinyin: "ci4",
          definition: "time",
        },
        {
          char: "性",
          pinyin: "xing4",
          definition: "nature",
        },
        {
          char: "袋",
          pinyin: "dai4",
          definition: "bag",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "马",
          pinyin: "ma3",
          definition: "horse",
        },
        {
          char: "克",
          pinyin: "ke4",
          definition: "gram",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "marker",
        },
        {
          char: "它",
          pinyin: "ta1",
          definition: "it",
        },
        {
          char: "拒",
          pinyin: "ju4",
          definition: "to refuse",
        },
        {
          char: "绝",
          pinyin: "jue2",
          definition: "to refuse",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "to use",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "污",
          pinyin: "wu1",
          definition: "pollution",
        },
        {
          char: "染",
          pinyin: "ran3",
          definition: "to dye",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive marker",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "效",
          pinyin: "xiao4",
          definition: "effect",
        },
        {
          char: "减",
          pinyin: "jian3",
          definition: "to reduce",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "few",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "注",
          pinyin: "zhu4",
          definition: "to note",
        },
        {
          char: "意",
          pinyin: "yi4",
          definition: "meaning",
        },
        {
          char: "摄",
          pinyin: "she4",
          definition: "to absorb",
        },
        {
          char: "氏",
          pinyin: "shi4",
          definition: "clan",
        },
        {
          char: "温",
          pinyin: "wen1",
          definition: "temperature",
        },
        {
          char: "度",
          pinyin: "du4",
          definition: "degree",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "在",
          pinyin: "zai4",
          definition: "at",
        },
        {
          char: "公",
          pinyin: "gong1",
          definition: "public",
        },
        {
          char: "共",
          pinyin: "gong4",
          definition: "common",
        },
        {
          char: "场",
          pinyin: "chang3",
          definition: "field",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "place",
        },
        {
          char: "赞",
          pinyin: "zan4",
          definition: "to praise",
        },
        {
          char: "成",
          pinyin: "cheng2",
          definition: "to succeed",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "to save",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "energy",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "做",
          pinyin: "zuo4",
          definition: "to do",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "to reach",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "随",
          pinyin: "sui2",
          definition: "to follow",
        },
        {
          char: "手",
          pinyin: "shou3",
          definition: "hand",
        },
        {
          char: "关",
          pinyin: "guan1",
          definition: "to close",
        },
        {
          char: "灯",
          pinyin: "deng1",
          definition: "light",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "砍",
          pinyin: "kan3",
          definition: "to chop",
        },
        {
          char: "伐",
          pinyin: "fa2",
          definition: "to fell",
        },
        {
          char: "林",
          pinyin: "lin2",
          definition: "forest",
        },
        {
          char: "木",
          pinyin: "mu4",
          definition: "wood",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "大",
          pinyin: "da4",
          definition: "big",
        },
        {
          char: "量",
          pinyin: "liang4",
          definition: "amount",
        },
        {
          char: "地",
          pinyin: "de5",
          definition: "adverbial",
        },
        {
          char: "造",
          pinyin: "zao4",
          definition: "to build",
        },
        {
          char: "成",
          pinyin: "cheng2",
          definition: "to form",
        },
        {
          char: "沙",
          pinyin: "sha1",
          definition: "sand",
        },
        {
          char: "尘",
          pinyin: "chen2",
          definition: "dust",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "绿",
          pinyin: "lv4",
          definition: "green",
        },
        {
          char: "色",
          pinyin: "se4",
          definition: "color",
        },
        {
          char: "植",
          pinyin: "zhi2",
          definition: "to plant",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive marker",
        },
        {
          char: "极",
          pinyin: "ji2",
          definition: "very",
        },
        {
          char: "力",
          pinyin: "li4",
          definition: "force",
        },
        {
          char: "提",
          pinyin: "ti2",
          definition: "to lift",
        },
        {
          char: "倡",
          pinyin: "chang4",
          definition: "to advocate",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "体",
          pinyin: "ti3",
          definition: "body",
        },
        {
          char: "会",
          pinyin: "hui4",
          definition: "to understand",
        },
        {
          char: "流",
          pinyin: "liu2",
          definition: "to flow",
        },
        {
          char: "汗",
          pinyin: "han4",
          definition: "sweat",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "我",
          pinyin: "wo3",
          definition: "I",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive marker",
        },
        {
          char: "那",
          pinyin: "na4",
          definition: "that",
        },
        {
          char: "热",
          pinyin: "re4",
          definition: "hot",
        },
        {
          char: "风",
          pinyin: "feng1",
          definition: "wind",
        },
        {
          char: "吹",
          pinyin: "chui1",
          definition: "to blow",
        },
        {
          char: "干",
          pinyin: "gan1",
          definition: "dry",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "after",
        },
        {
          char: "加",
          pinyin: "jia1",
          definition: "to add",
        },
        {
          char: "油",
          pinyin: "you2",
          definition: "oil",
        },
        {
          char: "保",
          pinyin: "bao3",
          definition: "to protect",
        },
        {
          char: "护",
          pinyin: "hu4",
          definition: "to protect",
        },
        {
          char: "美",
          pinyin: "mei3",
          definition: "beautiful",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "家",
          pinyin: "jia1",
          definition: "home",
        },
        {
          char: "园",
          pinyin: "yuan2",
          definition: "garden",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
    ],
  },
  finance: {
    easy: [
      [
        {
          char: "姑",
          pinyin: "gu1",
          definition: "aunt",
        },
        {
          char: "妈",
          pinyin: "ma1",
          definition: "aunt",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "thrifty",
        },
        {
          char: "俭",
          pinyin: "jian3",
          definition: "thrifty",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "我",
          pinyin: "wo2",
          definition: "I",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "一",
          pinyin: "yi2",
          definition: "one",
        },
        {
          char: "笔",
          pinyin: "bi3",
          definition: "measure word for money",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "bank savings",
        },
        {
          char: "款",
          pinyin: "kuan3",
          definition: "bank savings",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "喜",
          pinyin: "xi3",
          definition: "like",
        },
        {
          char: "欢",
          pinyin: "huan1",
          definition: "like",
        },
        {
          char: "投",
          pinyin: "tou2",
          definition: "invest",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "invest",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "妈",
          pinyin: "ma1",
          definition: "mom",
        },
        {
          char: "在",
          pinyin: "zai4",
          definition: "at",
        },
        {
          char: "学",
          pinyin: "xue2",
          definition: "learn",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "manage",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "manage",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "票",
          pinyin: "piao4",
          definition: "stock",
        },
        {
          char: "涨",
          pinyin: "zhang3",
          definition: "rise",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "不",
          pinyin: "bu2",
          definition: "not",
        },
        {
          char: "喜",
          pinyin: "xi3",
          definition: "like",
        },
        {
          char: "欢",
          pinyin: "huan1",
          definition: "like",
        },
        {
          char: "炒",
          pinyin: "chao3",
          definition: "flip",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "引",
          pinyin: "yin3",
          definition: "lead to",
        },
        {
          char: "起",
          pinyin: "qi3",
          definition: "lead to",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "思",
          pinyin: "si1",
          definition: "think",
        },
        {
          char: "考",
          pinyin: "kao3",
          definition: "think",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "我",
          pinyin: "wo2",
          definition: "I",
        },
        {
          char: "感",
          pinyin: "gan3",
          definition: "feel",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "feel",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "郁",
          pinyin: "yu4",
          definition: "depressed",
        },
        {
          char: "闷",
          pinyin: "men4",
          definition: "depressed",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "think",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "want",
        },
        {
          char: "享",
          pinyin: "xiang3",
          definition: "enjoy",
        },
        {
          char: "受",
          pinyin: "shou4",
          definition: "enjoy",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "孙",
          pinyin: "sun1",
          definition: "grandson",
        },
        {
          char: "子",
          pinyin: "zi3",
          definition: "grandson",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "辛",
          pinyin: "xin1",
          definition: "hard",
        },
        {
          char: "苦",
          pinyin: "ku3",
          definition: "hard",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
    ],
    medium: [
      [
        {
          char: "姑",
          pinyin: "gu1",
          definition: "aunt",
        },
        {
          char: "妈",
          pinyin: "ma1",
          definition: "aunt",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "thrifty",
        },
        {
          char: "俭",
          pinyin: "jian3",
          definition: "thrifty",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "because",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "deposit",
        },
        {
          char: "款",
          pinyin: "kuan3",
          definition: "deposit",
        },
        {
          char: "多",
          pinyin: "duo1",
          definition: "many",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "so",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "so",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "郁",
          pinyin: "yu4",
          definition: "gloomy",
        },
        {
          char: "闷",
          pinyin: "men4",
          definition: "gloomy",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "应",
          pinyin: "ying1",
          definition: "should",
        },
        {
          char: "该",
          pinyin: "gai1",
          definition: "should",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "manage",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "wealth",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "如",
          pinyin: "ru2",
          definition: "if",
        },
        {
          char: "果",
          pinyin: "guo3",
          definition: "if",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "think",
        },
        {
          char: "投",
          pinyin: "tou2",
          definition: "invest",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "invest",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "就",
          pinyin: "jiu4",
          definition: "then",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "must",
        },
        {
          char: "思",
          pinyin: "si1",
          definition: "think",
        },
        {
          char: "考",
          pinyin: "kao3",
          definition: "think",
        },
        {
          char: "风",
          pinyin: "feng1",
          definition: "risk",
        },
        {
          char: "险",
          pinyin: "xian3",
          definition: "risk",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "市",
          pinyin: "shi4",
          definition: "market",
        },
        {
          char: "常",
          pinyin: "chang2",
          definition: "often",
        },
        {
          char: "涨",
          pinyin: "zhang3",
          definition: "rise",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "也",
          pinyin: "ye3",
          definition: "also",
        },
        {
          char: "会",
          pinyin: "hui4",
          definition: "will",
        },
        {
          char: "跌",
          pinyin: "die1",
          definition: "fall",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "老",
          pinyin: "lao3",
          definition: "old",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "lady",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "lady",
        },
        {
          char: "总",
          pinyin: "zong3",
          definition: "always",
        },
        {
          char: "省",
          pinyin: "sheng3",
          definition: "frugal",
        },
        {
          char: "吃",
          pinyin: "chi1",
          definition: "eat",
        },
        {
          char: "俭",
          pinyin: "jian3",
          definition: "frugal",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "use",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "because",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "want",
        },
        {
          char: "给",
          pinyin: "gei3",
          definition: "give",
        },
        {
          char: "孙",
          pinyin: "sun1",
          definition: "grandson",
        },
        {
          char: "子",
          pinyin: "zi5",
          definition: "grandson",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "deposit",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "笔",
          pinyin: "bi3",
          definition: "measure",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "能",
          pinyin: "neng2",
          definition: "can",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "use",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "劝",
          pinyin: "quan4",
          definition: "persuade",
        },
        {
          char: "未",
          pinyin: "wei4",
          definition: "not yet",
        },
        {
          char: "婚",
          pinyin: "hun1",
          definition: "marriage",
        },
        {
          char: "妻",
          pinyin: "qi1",
          definition: "wife",
        },
        {
          char: "不",
          pinyin: "bu2",
          definition: "not",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "want",
        },
        {
          char: "吵",
          pinyin: "chao3",
          definition: "noise",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "赚",
          pinyin: "zhuan4",
          definition: "earn",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "快",
          pinyin: "kuai4",
          definition: "fast",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "会",
          pinyin: "hui4",
          definition: "will",
        },
        {
          char: "引",
          pinyin: "yin3",
          definition: "lead",
        },
        {
          char: "起",
          pinyin: "qi3",
          definition: "lead",
        },
        {
          char: "矛",
          pinyin: "mao2",
          definition: "conflict",
        },
        {
          char: "盾",
          pinyin: "dun4",
          definition: "conflict",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "如",
          pinyin: "ru2",
          definition: "if",
        },
        {
          char: "果",
          pinyin: "guo3",
          definition: "if",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "want",
        },
        {
          char: "增",
          pinyin: "zeng1",
          definition: "increase",
        },
        {
          char: "加",
          pinyin: "jia1",
          definition: "increase",
        },
        {
          char: "利",
          pinyin: "li4",
          definition: "interest",
        },
        {
          char: "息",
          pinyin: "xi1",
          definition: "interest",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "就",
          pinyin: "jiu4",
          definition: "then",
        },
        {
          char: "去",
          pinyin: "qu4",
          definition: "go",
        },
        {
          char: "签",
          pinyin: "qian1",
          definition: "sign",
        },
        {
          char: "合",
          pinyin: "he2",
          definition: "contract",
        },
        {
          char: "同",
          pinyin: "tong2",
          definition: "contract",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "是",
          pinyin: "shi4",
          definition: "is",
        },
        {
          char: "个",
          pinyin: "ge4",
          definition: "measure",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "idea",
        },
        {
          char: "法",
          pinyin: "fa3",
          definition: "idea",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "突",
          pinyin: "tu1",
          definition: "suddenly",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "suddenly",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "want",
        },
        {
          char: "去",
          pinyin: "qu4",
          definition: "go",
        },
        {
          char: "做",
          pinyin: "zuo4",
          definition: "do",
        },
        {
          char: "义",
          pinyin: "yi4",
          definition: "volunteer",
        },
        {
          char: "工",
          pinyin: "gong1",
          definition: "volunteer",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "because",
        },
        {
          char: "享",
          pinyin: "xiang3",
          definition: "enjoy",
        },
        {
          char: "受",
          pinyin: "shou4",
          definition: "enjoy",
        },
        {
          char: "老",
          pinyin: "lao3",
          definition: "old",
        },
        {
          char: "年",
          pinyin: "nian2",
          definition: "age",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "辛",
          pinyin: "xin1",
          definition: "hard",
        },
        {
          char: "苦",
          pinyin: "ku3",
          definition: "hard",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "孙",
          pinyin: "sun1",
          definition: "granddaughter",
        },
        {
          char: "女",
          pinyin: "nv3",
          definition: "granddaughter",
        },
        {
          char: "劝",
          pinyin: "quan4",
          definition: "persuade",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "her",
        },
        {
          char: "不",
          pinyin: "bu4",
          definition: "not",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "want",
        },
        {
          char: "打",
          pinyin: "da3",
          definition: "play",
        },
        {
          char: "麻",
          pinyin: "ma2",
          definition: "mahjong",
        },
        {
          char: "将",
          pinyin: "jiang4",
          definition: "mahjong",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "那",
          pinyin: "na4",
          definition: "that",
        },
        {
          char: "算",
          pinyin: "suan4",
          definition: "count",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "累",
          pinyin: "lei4",
          definition: "tired",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "为",
          pinyin: "wei4",
          definition: "because",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "票",
          pinyin: "piao4",
          definition: "stock",
        },
        {
          char: "跌",
          pinyin: "die1",
          definition: "fall",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "所",
          pinyin: "suo3",
          definition: "so",
        },
        {
          char: "以",
          pinyin: "yi3",
          definition: "so",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "赔",
          pinyin: "pei2",
          definition: "lose",
        },
        {
          char: "了",
          pinyin: "le5",
          definition: "particle",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "deposit",
        },
        {
          char: "款",
          pinyin: "kuan3",
          definition: "deposit",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "现",
          pinyin: "xian4",
          definition: "now",
        },
        {
          char: "在",
          pinyin: "zai4",
          definition: "now",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "regret",
        },
        {
          char: "悔",
          pinyin: "hui3",
          definition: "regret",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "如",
          pinyin: "ru2",
          definition: "if",
        },
        {
          char: "果",
          pinyin: "guo3",
          definition: "if",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "want",
        },
        {
          char: "抵",
          pinyin: "di3",
          definition: "mortgage",
        },
        {
          char: "押",
          pinyin: "ya1",
          definition: "mortgage",
        },
        {
          char: "房",
          pinyin: "fang2",
          definition: "house",
        },
        {
          char: "产",
          pinyin: "chan3",
          definition: "property",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "就",
          pinyin: "jiu4",
          definition: "then",
        },
        {
          char: "要",
          pinyin: "yao4",
          definition: "must",
        },
        {
          char: "说",
          pinyin: "shuo1",
          definition: "persuade",
        },
        {
          char: "服",
          pinyin: "fu2",
          definition: "persuade",
        },
        {
          char: "家",
          pinyin: "jia1",
          definition: "family",
        },
        {
          char: "人",
          pinyin: "ren2",
          definition: "people",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "合",
          pinyin: "he2",
          definition: "combine",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "reasonable",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "风",
          pinyin: "feng1",
          definition: "risk",
        },
        {
          char: "险",
          pinyin: "xian3",
          definition: "risk",
        },
        {
          char: "大",
          pinyin: "da4",
          definition: "big",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "个",
          pinyin: "ge4",
          definition: "measure",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "manage",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "wealth",
        },
        {
          char: "方",
          pinyin: "fang1",
          definition: "method",
        },
        {
          char: "法",
          pinyin: "fa3",
          definition: "method",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "虽",
          pinyin: "sui1",
          definition: "although",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "although",
        },
        {
          char: "慢",
          pinyin: "man4",
          definition: "slow",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "但",
          pinyin: "dan4",
          definition: "but",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "安",
          pinyin: "an1",
          definition: "safe",
        },
        {
          char: "全",
          pinyin: "quan2",
          definition: "safe",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "你",
          pinyin: "ni3",
          definition: "you",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "更",
          pinyin: "geng4",
          definition: "more",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "的",
          pinyin: "de5",
          definition: "possessive",
        },
        {
          char: "吗",
          pinyin: "ma5",
          definition: "question particle",
        },
        {
          char: "？",
          pinyin: "？",
          definition: "punctuation",
        },
      ],
    ],
    hard: [
      [
        {
          char: "姑",
          pinyin: "gu1",
          definition: "aunt (father’s sister)",
        },
        {
          char: "妈",
          pinyin: "ma1",
          definition: "aunt (father’s sister)",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "省",
          pinyin: "sheng3",
          definition: "to save",
        },
        {
          char: "吃",
          pinyin: "chi1",
          definition: "to eat",
        },
        {
          char: "俭",
          pinyin: "jian3",
          definition: "frugal",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "to use",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "take",
        },
        {
          char: "一",
          pinyin: "yi4",
          definition: "a",
        },
        {
          char: "笔",
          pinyin: "bi3",
          definition: "measure word for sums of money",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "to deposit",
        },
        {
          char: "款",
          pinyin: "kuan3",
          definition: "bank savings",
        },
        {
          char: "放",
          pinyin: "fang4",
          definition: "to put",
        },
        {
          char: "入",
          pinyin: "ru4",
          definition: "to enter",
        },
        {
          char: "银",
          pinyin: "yin2",
          definition: "silver",
        },
        {
          char: "行",
          pinyin: "hang2",
          definition: "bank",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "因",
          pinyin: "yin1",
          definition: "because",
        },
        {
          char: "利",
          pinyin: "li4",
          definition: "interest",
        },
        {
          char: "息",
          pinyin: "xi1",
          definition: "interest",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "too",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "few",
        },
        {
          char: "感",
          pinyin: "gan3",
          definition: "to feel",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "resultative complement",
        },
        {
          char: "郁",
          pinyin: "yu4",
          definition: "gloomy",
        },
        {
          char: "闷",
          pinyin: "men4",
          definition: "depressed",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "开",
          pinyin: "kai1",
          definition: "to start",
        },
        {
          char: "始",
          pinyin: "shi3",
          definition: "to begin",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "to manage",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "wealth",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "孙",
          pinyin: "sun1",
          definition: "grandson",
        },
        {
          char: "子",
          pinyin: "zi3",
          definition: "grandson",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "take",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "to use",
        },
        {
          char: "来",
          pinyin: "lai2",
          definition: "to come",
        },
        {
          char: "投",
          pinyin: "tou2",
          definition: "to invest",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "investment",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "是",
          pinyin: "shi4",
          definition: "to be",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "票",
          pinyin: "piao4",
          definition: "stock",
        },
        {
          char: "大",
          pinyin: "da4",
          definition: "big",
        },
        {
          char: "涨",
          pinyin: "zhang3",
          definition: "to rise",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "市",
          pinyin: "shi4",
          definition: "market",
        },
        {
          char: "跌",
          pinyin: "die1",
          definition: "to fall",
        },
        {
          char: "得",
          pinyin: "de2",
          definition: "resultative complement",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "惨",
          pinyin: "can3",
          definition: "miserable",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "赔",
          pinyin: "pei2",
          definition: "to lose money",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "引",
          pinyin: "yin3",
          definition: "to lead to",
        },
        {
          char: "起",
          pinyin: "qi3",
          definition: "to rise",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "矛",
          pinyin: "mao2",
          definition: "spear",
        },
        {
          char: "盾",
          pinyin: "dun4",
          definition: "conflict",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "老",
          pinyin: "lao3",
          definition: "old",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "too",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "too",
        },
        {
          char: "很",
          pinyin: "hen3",
          definition: "very",
        },
        {
          char: "节",
          pinyin: "jie2",
          definition: "frugal",
        },
        {
          char: "俭",
          pinyin: "jian3",
          definition: "frugal",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive",
        },
        {
          char: "孙",
          pinyin: "sun1",
          definition: "grandson",
        },
        {
          char: "女",
          pinyin: "nv3",
          definition: "granddaughter",
        },
        {
          char: "劝",
          pinyin: "quan4",
          definition: "to persuade",
        },
        {
          char: "说",
          pinyin: "shuo1",
          definition: "to say",
        },
        {
          char: "：",
          pinyin: "：",
          definition: "punctuation",
        },
        {
          char: "“",
          pinyin: "“",
          definition: "punctuation",
        },
        {
          char: "享",
          pinyin: "xiang3",
          definition: "to enjoy",
        },
        {
          char: "受",
          pinyin: "shou4",
          definition: "enjoyment",
        },
        {
          char: "吧",
          pinyin: "ba0",
          definition: "particle",
        },
        {
          char: "！",
          pinyin: "！",
          definition: "punctuation",
        },
        {
          char: "”",
          pinyin: "”",
          definition: "punctuation",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "是",
          pinyin: "shi4",
          definition: "to be",
        },
        {
          char: "思",
          pinyin: "si1",
          definition: "to think",
        },
        {
          char: "考",
          pinyin: "kao3",
          definition: "to ponder",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "许",
          pinyin: "xu3",
          definition: "many",
        },
        {
          char: "久",
          pinyin: "jiu3",
          definition: "long",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "同",
          pinyin: "tong2",
          definition: "same",
        },
        {
          char: "意",
          pinyin: "yi4",
          definition: "idea",
        },
        {
          char: "旅",
          pinyin: "lv3",
          definition: "travel",
        },
        {
          char: "行",
          pinyin: "xing2",
          definition: "travel",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "变",
          pinyin: "bian4",
          definition: "to change",
        },
        {
          char: "得",
          pinyin: "de2",
          definition: "resultative complement",
        },
        {
          char: "开",
          pinyin: "kai1",
          definition: "open",
        },
        {
          char: "朗",
          pinyin: "lang3",
          definition: "bright",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "take",
        },
        {
          char: "那",
          pinyin: "na4",
          definition: "that",
        },
        {
          char: "合",
          pinyin: "he2",
          definition: "contract",
        },
        {
          char: "同",
          pinyin: "tong2",
          definition: "contract",
        },
        {
          char: "签",
          pinyin: "qian1",
          definition: "to sign",
        },
        {
          char: "下",
          pinyin: "xia4",
          definition: "resultative complement",
        },
        {
          char: "来",
          pinyin: "lai2",
          definition: "to come",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "这",
          pinyin: "zhe4",
          definition: "this",
        },
        {
          char: "笔",
          pinyin: "bi3",
          definition: "measure word",
        },
        {
          char: "投",
          pinyin: "tou2",
          definition: "invest",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "investment",
        },
        {
          char: "使",
          pinyin: "shi3",
          definition: "to cause",
        },
        {
          char: "增",
          pinyin: "zeng1",
          definition: "increase",
        },
        {
          char: "加",
          pinyin: "jia1",
          definition: "add",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "收",
          pinyin: "shou1",
          definition: "income",
        },
        {
          char: "入",
          pinyin: "ru4",
          definition: "income",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "说",
          pinyin: "shuo1",
          definition: "to say",
        },
        {
          char: "服",
          pinyin: "fu2",
          definition: "to convince",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "未",
          pinyin: "wei4",
          definition: "not yet",
        },
        {
          char: "婚",
          pinyin: "hun1",
          definition: "marriage",
        },
        {
          char: "妻",
          pinyin: "qi1",
          definition: "wife",
        },
        {
          char: "赞",
          pinyin: "zan4",
          definition: "praise",
        },
        {
          char: "同",
          pinyin: "tong2",
          definition: "same",
        },
        {
          char: "该",
          pinyin: "gai1",
          definition: "should",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "thought",
        },
        {
          char: "法",
          pinyin: "fa3",
          definition: "method",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "那",
          pinyin: "na4",
          definition: "that",
        },
        {
          char: "个",
          pinyin: "ge4",
          definition: "measure word",
        },
        {
          char: "人",
          pinyin: "ren2",
          definition: "person",
        },
        {
          char: "突",
          pinyin: "tu1",
          definition: "suddenly",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "suddenly",
        },
        {
          char: "失",
          pinyin: "shi1",
          definition: "lose",
        },
        {
          char: "去",
          pinyin: "qu4",
          definition: "go",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "炒",
          pinyin: "chao3",
          definition: "flip",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "的",
          pinyin: "de0",
          definition: "particle",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "capital",
        },
        {
          char: "金",
          pinyin: "jin1",
          definition: "money",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "抵",
          pinyin: "di3",
          definition: "mortgage",
        },
        {
          char: "押",
          pinyin: "ya1",
          definition: "mortgage",
        },
        {
          char: "房",
          pinyin: "fang2",
          definition: "house",
        },
        {
          char: "产",
          pinyin: "chan3",
          definition: "property",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "风",
          pinyin: "feng1",
          definition: "risk",
        },
        {
          char: "险",
          pinyin: "xian3",
          definition: "risk",
        },
        {
          char: "太",
          pinyin: "tai4",
          definition: "too",
        },
        {
          char: "高",
          pinyin: "gao1",
          definition: "high",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive",
        },
        {
          char: "债",
          pinyin: "zhai4",
          definition: "debt",
        },
        {
          char: "务",
          pinyin: "wu4",
          definition: "debt",
        },
        {
          char: "逼",
          pinyin: "bi1",
          definition: "force",
        },
        {
          char: "疯",
          pinyin: "feng1",
          definition: "crazy",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "take",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "deposit",
        },
        {
          char: "款",
          pinyin: "kuan3",
          definition: "bank savings",
        },
        {
          char: "算",
          pinyin: "suan4",
          definition: "count as",
        },
        {
          char: "好",
          pinyin: "hao3",
          definition: "good",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "是",
          pinyin: "shi4",
          definition: "to be",
        },
        {
          char: "做",
          pinyin: "zuo4",
          definition: "do",
        },
        {
          char: "义",
          pinyin: "yi4",
          definition: "volunteer",
        },
        {
          char: "工",
          pinyin: "gong1",
          definition: "volunteer",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "打",
          pinyin: "da3",
          definition: "play",
        },
        {
          char: "麻",
          pinyin: "ma2",
          definition: "mahjong",
        },
        {
          char: "将",
          pinyin: "jiang3",
          definition: "mahjong",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "享",
          pinyin: "xiang3",
          definition: "enjoy",
        },
        {
          char: "受",
          pinyin: "shou4",
          definition: "enjoy",
        },
        {
          char: "老",
          pinyin: "lao3",
          definition: "old",
        },
        {
          char: "年",
          pinyin: "nian2",
          definition: "age",
        },
        {
          char: "时",
          pinyin: "shi2",
          definition: "time",
        },
        {
          char: "光",
          pinyin: "guang1",
          definition: "light",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "活",
          pinyin: "huo2",
          definition: "live",
        },
        {
          char: "得",
          pinyin: "de2",
          definition: "resultative",
        },
        {
          char: "辛",
          pinyin: "xin1",
          definition: "hard",
        },
        {
          char: "苦",
          pinyin: "ku3",
          definition: "hard",
        },
        {
          char: "都",
          pinyin: "dou1",
          definition: "all",
        },
        {
          char: "值",
          pinyin: "zhi2",
          definition: "worth",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "对",
          pinyin: "dui4",
          definition: "towards",
        },
        {
          char: "于",
          pinyin: "yu2",
          definition: "about",
        },
        {
          char: "理",
          pinyin: "li3",
          definition: "manage",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "wealth",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "省",
          pinyin: "sheng3",
          definition: "save",
        },
        {
          char: "吃",
          pinyin: "chi1",
          definition: "eat",
        },
        {
          char: "俭",
          pinyin: "jian3",
          definition: "frugal",
        },
        {
          char: "用",
          pinyin: "yong4",
          definition: "use",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "大",
          pinyin: "da4",
          definition: "big",
        },
        {
          char: "胆",
          pinyin: "dan3",
          definition: "courage",
        },
        {
          char: "投",
          pinyin: "tou2",
          definition: "invest",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "investment",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "赚",
          pinyin: "zhuan4",
          definition: "earn",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "resultative",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "take",
        },
        {
          char: "他",
          pinyin: "ta1",
          definition: "he",
        },
        {
          char: "的",
          pinyin: "de0",
          definition: "particle",
        },
        {
          char: "身",
          pinyin: "shen1",
          definition: "body",
        },
        {
          char: "份",
          pinyin: "fen4",
          definition: "identity",
        },
        {
          char: "改",
          pinyin: "gai3",
          definition: "change",
        },
        {
          char: "变",
          pinyin: "bian4",
          definition: "change",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "姑",
          pinyin: "gu1",
          definition: "aunt",
        },
        {
          char: "妈",
          pinyin: "ma1",
          definition: "aunt",
        },
        {
          char: "没",
          pinyin: "mei2",
          definition: "not",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "想",
          pinyin: "xiang3",
          definition: "think",
        },
        {
          char: "到",
          pinyin: "dao4",
          definition: "resultative",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "被",
          pinyin: "bei4",
          definition: "passive",
        },
        {
          char: "孙",
          pinyin: "sun1",
          definition: "grandson",
        },
        {
          char: "子",
          pinyin: "zi3",
          definition: "grandson",
        },
        {
          char: "骗",
          pinyin: "pian4",
          definition: "deceive",
        },
        {
          char: "走",
          pinyin: "zou3",
          definition: "resultative",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "是",
          pinyin: "shi4",
          definition: "to be",
        },
        {
          char: "信",
          pinyin: "xin4",
          definition: "believe",
        },
        {
          char: "任",
          pinyin: "ren4",
          definition: "trust",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "借",
          pinyin: "jie4",
          definition: "lend",
        },
        {
          char: "出",
          pinyin: "chu1",
          definition: "resultative",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "钱",
          pinyin: "qian2",
          definition: "money",
        },
        {
          char: "再",
          pinyin: "zai4",
          definition: "again",
        },
        {
          char: "也",
          pinyin: "ye3",
          definition: "also",
        },
        {
          char: "没",
          pinyin: "mei2",
          definition: "not",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "拿",
          pinyin: "na2",
          definition: "take",
        },
        {
          char: "回",
          pinyin: "hui2",
          definition: "resultative",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "理",
          pinyin: "li3",
          definition: "manage",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "wealth",
        },
        {
          char: "对",
          pinyin: "dui4",
          definition: "towards",
        },
        {
          char: "于",
          pinyin: "yu2",
          definition: "about",
        },
        {
          char: "年",
          pinyin: "nian2",
          definition: "age",
        },
        {
          char: "老",
          pinyin: "lao3",
          definition: "old",
        },
        {
          char: "人",
          pinyin: "ren2",
          definition: "person",
        },
        {
          char: "的",
          pinyin: "de0",
          definition: "particle",
        },
        {
          char: "意",
          pinyin: "yi4",
          definition: "meaning",
        },
        {
          char: "义",
          pinyin: "yi4",
          definition: "meaning",
        },
        {
          char: "：",
          pinyin: "：",
          definition: "punctuation",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "有",
          pinyin: "you3",
          definition: "have",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "deposit",
        },
        {
          char: "款",
          pinyin: "kuan3",
          definition: "savings",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "减",
          pinyin: "jian3",
          definition: "reduce",
        },
        {
          char: "少",
          pinyin: "shao3",
          definition: "little",
        },
        {
          char: "投",
          pinyin: "tou2",
          definition: "invest",
        },
        {
          char: "资",
          pinyin: "zi1",
          definition: "investment",
        },
        {
          char: "风",
          pinyin: "feng1",
          definition: "risk",
        },
        {
          char: "险",
          pinyin: "xian3",
          definition: "risk",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "实",
          pinyin: "shi2",
          definition: "real",
        },
        {
          char: "现",
          pinyin: "xian4",
          definition: "realize",
        },
        {
          char: "财",
          pinyin: "cai2",
          definition: "wealth",
        },
        {
          char: "富",
          pinyin: "fu4",
          definition: "wealth",
        },
        {
          char: "增",
          pinyin: "zeng1",
          definition: "increase",
        },
        {
          char: "值",
          pinyin: "zhi2",
          definition: "value",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
      [
        {
          char: "她",
          pinyin: "ta1",
          definition: "she",
        },
        {
          char: "把",
          pinyin: "ba3",
          definition: "take",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "票",
          pinyin: "piao4",
          definition: "stock",
        },
        {
          char: "卖",
          pinyin: "mai4",
          definition: "sell",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "先",
          pinyin: "xian1",
          definition: "first",
        },
        {
          char: "存",
          pinyin: "cun2",
          definition: "deposit",
        },
        {
          char: "入",
          pinyin: "ru4",
          definition: "enter",
        },
        {
          char: "银",
          pinyin: "yin2",
          definition: "bank",
        },
        {
          char: "行",
          pinyin: "hang2",
          definition: "bank",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "然",
          pinyin: "ran2",
          definition: "then",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "then",
        },
        {
          char: "远",
          pinyin: "yuan3",
          definition: "far",
        },
        {
          char: "离",
          pinyin: "li2",
          definition: "away",
        },
        {
          char: "股",
          pinyin: "gu3",
          definition: "stock",
        },
        {
          char: "市",
          pinyin: "shi4",
          definition: "market",
        },
        {
          char: "，",
          pinyin: "，",
          definition: "punctuation",
        },
        {
          char: "最",
          pinyin: "zui4",
          definition: "most",
        },
        {
          char: "后",
          pinyin: "hou4",
          definition: "lastly",
        },
        {
          char: "过",
          pinyin: "guo4",
          definition: "past",
        },
        {
          char: "上",
          pinyin: "shang4",
          definition: "up",
        },
        {
          char: "了",
          pinyin: "le0",
          definition: "particle",
        },
        {
          char: "平",
          pinyin: "ping2",
          definition: "calm",
        },
        {
          char: "静",
          pinyin: "jing4",
          definition: "quiet",
        },
        {
          char: "的",
          pinyin: "de0",
          definition: "particle",
        },
        {
          char: "日",
          pinyin: "ri4",
          definition: "day",
        },
        {
          char: "子",
          pinyin: "zi3",
          definition: "day",
        },
        {
          char: "。",
          pinyin: "。",
          definition: "punctuation",
        },
      ],
    ],
  },
  interview: {
  "easy": [
    [
      {
        "char": "二",
        "pinyin": "er4",
        "definition": "two"
      },
      {
        "char": "一",
        "pinyin": "yi2",
        "definition": "one"
      },
      {
        "char": "世",
        "pinyin": "shi4",
        "definition": "century"
      },
      {
        "char": "纪",
        "pinyin": "ji4",
        "definition": "century"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "跨",
        "pinyin": "kua4",
        "definition": "transnational"
      },
      {
        "char": "国",
        "pinyin": "guo2",
        "definition": "transnational"
      },
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "company"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "company"
      },
      {
        "char": "进",
        "pinyin": "jin4",
        "definition": "to enter"
      },
      {
        "char": "入",
        "pinyin": "ru4",
        "definition": "to enter"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "company"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "company"
      },
      {
        "char": "吸",
        "pinyin": "xi1",
        "definition": "to attract"
      },
      {
        "char": "引",
        "pinyin": "yin3",
        "definition": "to attract"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "overseas"
      },
      {
        "char": "外",
        "pinyin": "wai4",
        "definition": "overseas"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person of ability"
      },
      {
        "char": "才",
        "pinyin": "cai2",
        "definition": "person of ability"
      },
      {
        "char": "归",
        "pinyin": "gui1",
        "definition": "to return"
      },
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "to return"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "穿",
        "pinyin": "chuan1",
        "definition": "wear"
      },
      {
        "char": "套",
        "pinyin": "tao4",
        "definition": "suit"
      },
      {
        "char": "装",
        "pinyin": "zhuang1",
        "definition": "suit"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "上",
        "pinyin": "shang4",
        "definition": "upper"
      },
      {
        "char": "衣",
        "pinyin": "yi1",
        "definition": "garment"
      },
      {
        "char": "湿",
        "pinyin": "shi1",
        "definition": "wet"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "总",
        "pinyin": "zong3",
        "definition": "general"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "严",
        "pinyin": "yan2",
        "definition": "serious"
      },
      {
        "char": "肃",
        "pinyin": "su4",
        "definition": "serious"
      },
      {
        "char": "得",
        "pinyin": "de5",
        "definition": "particle"
      },
      {
        "char": "吓",
        "pinyin": "xia4",
        "definition": "scary"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "sky"
      },
      {
        "char": "阴",
        "pinyin": "yin1",
        "definition": "overcast"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud"
      },
      {
        "char": "转",
        "pinyin": "zhuan3",
        "definition": "to turn"
      },
      {
        "char": "为",
        "pinyin": "wei2",
        "definition": "to become"
      },
      {
        "char": "晴",
        "pinyin": "qing2",
        "definition": "sunny"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "sky"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "我",
        "pinyin": "wo3",
        "definition": "I"
      },
      {
        "char": "收",
        "pinyin": "shou1",
        "definition": "to receive"
      },
      {
        "char": "到",
        "pinyin": "dao4",
        "definition": "arrive"
      },
      {
        "char": "录",
        "pinyin": "lu4",
        "definition": "employ"
      },
      {
        "char": "用",
        "pinyin": "yong4",
        "definition": "employ"
      },
      {
        "char": "通",
        "pinyin": "tong1",
        "definition": "notice"
      },
      {
        "char": "知",
        "pinyin": "zhi1",
        "definition": "notice"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "既",
        "pinyin": "ji4",
        "definition": "since"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "since"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you"
      },
      {
        "char": "喜",
        "pinyin": "xi3",
        "definition": "like"
      },
      {
        "char": "欢",
        "pinyin": "huan1",
        "definition": "like"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "接",
        "pinyin": "jie1",
        "definition": "follow"
      },
      {
        "char": "着",
        "pinyin": "zhe5",
        "definition": "continue"
      },
      {
        "char": "做",
        "pinyin": "zuo4",
        "definition": "to do"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "这",
        "pinyin": "zhe4",
        "definition": "this"
      },
      {
        "char": "产",
        "pinyin": "chan3",
        "definition": "product"
      },
      {
        "char": "品",
        "pinyin": "pin3",
        "definition": "product"
      },
      {
        "char": "好",
        "pinyin": "hao3",
        "definition": "good"
      },
      {
        "char": "在",
        "pinyin": "zai4",
        "definition": "at"
      },
      {
        "char": "没",
        "pinyin": "mei2",
        "definition": "not"
      },
      {
        "char": "缺",
        "pinyin": "que1",
        "definition": "defect"
      },
      {
        "char": "点",
        "pinyin": "dian3",
        "definition": "defect"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "善",
        "pinyin": "shan4",
        "definition": "good at"
      },
      {
        "char": "于",
        "pinyin": "yu2",
        "definition": "good at"
      },
      {
        "char": "销",
        "pinyin": "xiao1",
        "definition": "sell"
      },
      {
        "char": "售",
        "pinyin": "shou4",
        "definition": "sell"
      },
      {
        "char": "零",
        "pinyin": "ling2",
        "definition": "snack"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "snack"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "加",
        "pinyin": "jia1",
        "definition": "work overtime"
      },
      {
        "char": "班",
        "pinyin": "ban1",
        "definition": "work overtime"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "往",
        "pinyin": "wang3",
        "definition": "often"
      },
      {
        "char": "往",
        "pinyin": "wang3",
        "definition": "often"
      },
      {
        "char": "不",
        "pinyin": "bu2",
        "definition": "not"
      },
      {
        "char": "满",
        "pinyin": "man3",
        "definition": "satisfied"
      },
      {
        "char": "意",
        "pinyin": "yi4",
        "definition": "satisfied"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ]
  ],
  "medium": [
    [
      {
        "char": "二",
        "pinyin": "er4",
        "definition": "two"
      },
      {
        "char": "十一",
        "pinyin": "shi2",
        "definition": "ten"
      },
      {
        "char": "世",
        "pinyin": "shi4",
        "definition": "century"
      },
      {
        "char": "纪",
        "pinyin": "ji4",
        "definition": "century"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "这",
        "pinyin": "zhe4",
        "definition": "this"
      },
      {
        "char": "家",
        "pinyin": "jia1",
        "definition": "family"
      },
      {
        "char": "跨",
        "pinyin": "kua4",
        "definition": "transnational"
      },
      {
        "char": "国",
        "pinyin": "guo2",
        "definition": "transnational"
      },
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "company"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "company"
      },
      {
        "char": "进",
        "pinyin": "jin4",
        "definition": "to enter"
      },
      {
        "char": "入",
        "pinyin": "ru4",
        "definition": "to enter"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "本",
        "pinyin": "ben3",
        "definition": "this"
      },
      {
        "char": "地",
        "pinyin": "di4",
        "definition": "local"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "虽",
        "pinyin": "sui1",
        "definition": "although"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "although"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "严",
        "pinyin": "yan2",
        "definition": "stern"
      },
      {
        "char": "肃",
        "pinyin": "su4",
        "definition": "stern"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "但",
        "pinyin": "dan4",
        "definition": "but"
      },
      {
        "char": "吸",
        "pinyin": "xi1",
        "definition": "to attract"
      },
      {
        "char": "引",
        "pinyin": "yin3",
        "definition": "to attract"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "many"
      },
      {
        "char": "名",
        "pinyin": "ming2",
        "definition": "measure word"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "talent"
      },
      {
        "char": "材",
        "pinyin": "cai2",
        "definition": "talent"
      },
      {
        "char": "？",
        "pinyin": "？",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "overseas"
      },
      {
        "char": "外",
        "pinyin": "wai4",
        "definition": "overseas"
      },
      {
        "char": "归",
        "pinyin": "gui1",
        "definition": "to return"
      },
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "to return"
      },
      {
        "char": "的",
        "pinyin": "de5",
        "definition": "particle"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "常",
        "pinyin": "chang2",
        "definition": "often"
      },
      {
        "char": "被",
        "pinyin": "bei4",
        "definition": "by"
      },
      {
        "char": "叫",
        "pinyin": "jiao4",
        "definition": "called"
      },
      {
        "char": "做",
        "pinyin": "zuo4",
        "definition": "called"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea turtle"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "sea turtle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "如",
        "pinyin": "ru2",
        "definition": "if"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "if"
      },
      {
        "char": "不",
        "pinyin": "bu2",
        "definition": "not"
      },
      {
        "char": "满",
        "pinyin": "man3",
        "definition": "satisfied"
      },
      {
        "char": "意",
        "pinyin": "yi4",
        "definition": "satisfied"
      },
      {
        "char": "薪",
        "pinyin": "xin1",
        "definition": "salary"
      },
      {
        "char": "水",
        "pinyin": "shui3",
        "definition": "salary"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "就",
        "pinyin": "jiu4",
        "definition": "then"
      },
      {
        "char": "去",
        "pinyin": "qu4",
        "definition": "to go"
      },
      {
        "char": "国",
        "pinyin": "guo2",
        "definition": "abroad"
      },
      {
        "char": "外",
        "pinyin": "wai4",
        "definition": "abroad"
      },
      {
        "char": "吗",
        "pinyin": "ma5",
        "definition": "question particle"
      },
      {
        "char": "？",
        "pinyin": "？",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "消",
        "pinyin": "xiao1",
        "definition": "to sell"
      },
      {
        "char": "售",
        "pinyin": "shou4",
        "definition": "to sell"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "穿",
        "pinyin": "chuan1",
        "definition": "to wear"
      },
      {
        "char": "着",
        "pinyin": "zhe5",
        "definition": "particle"
      },
      {
        "char": "新",
        "pinyin": "xin1",
        "definition": "new"
      },
      {
        "char": "套",
        "pinyin": "tao4",
        "definition": "suit"
      },
      {
        "char": "装",
        "pinyin": "zhuang1",
        "definition": "suit"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "因",
        "pinyin": "yin1",
        "definition": "because"
      },
      {
        "char": "为",
        "pinyin": "wei4",
        "definition": "because"
      },
      {
        "char": "突",
        "pinyin": "tu1",
        "definition": "suddenly"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "suddenly"
      },
      {
        "char": "下",
        "pinyin": "xia4",
        "definition": "to fall"
      },
      {
        "char": "雨",
        "pinyin": "yu3",
        "definition": "rain"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "所",
        "pinyin": "suo3",
        "definition": "so"
      },
      {
        "char": "以",
        "pinyin": "yi3",
        "definition": "so"
      },
      {
        "char": "上",
        "pinyin": "shang4",
        "definition": "upper"
      },
      {
        "char": "衣",
        "pinyin": "yi1",
        "definition": "upper"
      },
      {
        "char": "湿",
        "pinyin": "shi1",
        "definition": "wet"
      },
      {
        "char": "透",
        "pinyin": "tou4",
        "definition": "thoroughly"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "干",
        "pinyin": "gan4",
        "definition": "why"
      },
      {
        "char": "吗",
        "pinyin": "ma5",
        "definition": "why"
      },
      {
        "char": "没",
        "pinyin": "mei2",
        "definition": "not"
      },
      {
        "char": "带",
        "pinyin": "dai4",
        "definition": "to bring"
      },
      {
        "char": "伞",
        "pinyin": "san3",
        "definition": "umbrella"
      },
      {
        "char": "？",
        "pinyin": "？",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "总",
        "pinyin": "zong3",
        "definition": "general"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "看",
        "pinyin": "kan4",
        "definition": "to look"
      },
      {
        "char": "起",
        "pinyin": "qi3",
        "definition": "to look"
      },
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "to look"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "严",
        "pinyin": "yan2",
        "definition": "stern"
      },
      {
        "char": "肃",
        "pinyin": "su4",
        "definition": "stern"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "员",
        "pinyin": "yuan2",
        "definition": "staff"
      },
      {
        "char": "工",
        "pinyin": "gong1",
        "definition": "staff"
      },
      {
        "char": "都",
        "pinyin": "dou1",
        "definition": "all"
      },
      {
        "char": "觉",
        "pinyin": "jue2",
        "definition": "to feel"
      },
      {
        "char": "得",
        "pinyin": "de5",
        "definition": "particle"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "吓",
        "pinyin": "xia4",
        "definition": "scary"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "scary"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "解",
        "pinyin": "jie3",
        "definition": "to explain"
      },
      {
        "char": "释",
        "pinyin": "shi4",
        "definition": "to explain"
      },
      {
        "char": "说",
        "pinyin": "shuo1",
        "definition": "to speak"
      },
      {
        "char": "：",
        "pinyin": "：",
        "definition": "punctuation"
      },
      {
        "char": "这",
        "pinyin": "zhe4",
        "definition": "this"
      },
      {
        "char": "不",
        "pinyin": "bu2",
        "definition": "not"
      },
      {
        "char": "是",
        "pinyin": "shi4",
        "definition": "is"
      },
      {
        "char": "真",
        "pinyin": "zhen1",
        "definition": "true"
      },
      {
        "char": "的",
        "pinyin": "de5",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "sky"
      },
      {
        "char": "阴",
        "pinyin": "yin1",
        "definition": "overcast"
      },
      {
        "char": "沉",
        "pinyin": "chen2",
        "definition": "heavy"
      },
      {
        "char": "沉",
        "pinyin": "chen2",
        "definition": "heavy"
      },
      {
        "char": "的",
        "pinyin": "de5",
        "definition": "particle"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud"
      },
      {
        "char": "层",
        "pinyin": "ceng2",
        "definition": "layer"
      },
      {
        "char": "转",
        "pinyin": "zhuan3",
        "definition": "to turn"
      },
      {
        "char": "黑",
        "pinyin": "hei1",
        "definition": "black"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "如",
        "pinyin": "ru2",
        "definition": "if"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "if"
      },
      {
        "char": "不",
        "pinyin": "bu4",
        "definition": "not"
      },
      {
        "char": "快",
        "pinyin": "kuai4",
        "definition": "fast"
      },
      {
        "char": "走",
        "pinyin": "zou3",
        "definition": "to walk"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "就",
        "pinyin": "jiu4",
        "definition": "then"
      },
      {
        "char": "会",
        "pinyin": "hui4",
        "definition": "will"
      },
      {
        "char": "淋",
        "pinyin": "lin2",
        "definition": "to soak"
      },
      {
        "char": "雨",
        "pinyin": "yu3",
        "definition": "rain"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "因",
        "pinyin": "yin1",
        "definition": "because"
      },
      {
        "char": "此",
        "pinyin": "ci3",
        "definition": "this"
      },
      {
        "char": "我",
        "pinyin": "wo3",
        "definition": "I"
      },
      {
        "char": "们",
        "pinyin": "men5",
        "definition": "plural"
      },
      {
        "char": "跑",
        "pinyin": "pao3",
        "definition": "to run"
      },
      {
        "char": "得",
        "pinyin": "de5",
        "definition": "particle"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "快",
        "pinyin": "kuai4",
        "definition": "fast"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "我",
        "pinyin": "wo3",
        "definition": "I"
      },
      {
        "char": "给",
        "pinyin": "gei3",
        "definition": "to give"
      },
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "company"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "company"
      },
      {
        "char": "寄",
        "pinyin": "ji4",
        "definition": "to mail"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "简",
        "pinyin": "jian3",
        "definition": "resume"
      },
      {
        "char": "历",
        "pinyin": "li4",
        "definition": "resume"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "希",
        "pinyin": "xi1",
        "definition": "hope"
      },
      {
        "char": "望",
        "pinyin": "wang4",
        "definition": "hope"
      },
      {
        "char": "能",
        "pinyin": "neng2",
        "definition": "can"
      },
      {
        "char": "收",
        "pinyin": "shou1",
        "definition": "receive"
      },
      {
        "char": "到",
        "pinyin": "dao4",
        "definition": "arrive"
      },
      {
        "char": "录",
        "pinyin": "lu4",
        "definition": "employ"
      },
      {
        "char": "用",
        "pinyin": "yong4",
        "definition": "employ"
      },
      {
        "char": "通",
        "pinyin": "tong1",
        "definition": "notice"
      },
      {
        "char": "知",
        "pinyin": "zhi1",
        "definition": "notice"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "既然",
        "pinyin": "ji4",
        "definition": "since"
      },
      {
        "char": "ran2",
        "pinyin": "ran2",
        "definition": "since"
      },
      {
        "char": "选",
        "pinyin": "xuan3",
        "definition": "to choose"
      },
      {
        "char": "了",
        "pinyin": "le5",
        "definition": "particle"
      },
      {
        "char": "它",
        "pinyin": "ta1",
        "definition": "it"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "就",
        "pinyin": "jiu4",
        "definition": "then"
      },
      {
        "char": "要",
        "pinyin": "yao4",
        "definition": "want"
      },
      {
        "char": "努",
        "pinyin": "nu3",
        "definition": "strive"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "effort"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "接",
        "pinyin": "jie1",
        "definition": "to follow"
      },
      {
        "char": "着",
        "pinyin": "zhe5",
        "definition": "to follow"
      },
      {
        "char": "回",
        "pinyin": "hui2",
        "definition": "to reply"
      },
      {
        "char": "答",
        "pinyin": "da2",
        "definition": "to reply"
      },
      {
        "char": "说",
        "pinyin": "shuo1",
        "definition": "to speak"
      },
      {
        "char": "这",
        "pinyin": "zhe4",
        "definition": "this"
      },
      {
        "char": "是",
        "pinyin": "shi4",
        "definition": "is"
      },
      {
        "char": "短",
        "pinyin": "duan3",
        "definition": "short"
      },
      {
        "char": "期",
        "pinyin": "qi1",
        "definition": "term"
      },
      {
        "char": "合",
        "pinyin": "he2",
        "definition": "cooperation"
      },
      {
        "char": "作",
        "pinyin": "zuo4",
        "definition": "cooperation"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "好",
        "pinyin": "hao3",
        "definition": "luckily"
      },
      {
        "char": "在",
        "pinyin": "zai4",
        "definition": "luckily"
      },
      {
        "char": "产",
        "pinyin": "chan3",
        "definition": "product"
      },
      {
        "char": "品",
        "pinyin": "pin3",
        "definition": "product"
      },
      {
        "char": "质",
        "pinyin": "zhi4",
        "definition": "quality"
      },
      {
        "char": "量",
        "pinyin": "liang4",
        "definition": "quality"
      },
      {
        "char": "不",
        "pinyin": "bu4",
        "definition": "not"
      },
      {
        "char": "错",
        "pinyin": "cuo4",
        "definition": "wrong"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "因",
        "pinyin": "yin1",
        "definition": "because"
      },
      {
        "char": "此",
        "pinyin": "ci3",
        "definition": "this"
      },
      {
        "char": "没",
        "pinyin": "mei2",
        "definition": "not"
      },
      {
        "char": "有",
        "pinyin": "you3",
        "definition": "have"
      },
      {
        "char": "缺",
        "pinyin": "que1",
        "definition": "shortcoming"
      },
      {
        "char": "点",
        "pinyin": "dian3",
        "definition": "shortcoming"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "如",
        "pinyin": "ru2",
        "definition": "if"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "if"
      },
      {
        "char": "爱",
        "pinyin": "ai4",
        "definition": "to love"
      },
      {
        "char": "吃",
        "pinyin": "chi1",
        "definition": "to eat"
      },
      {
        "char": "零",
        "pinyin": "ling2",
        "definition": "snack"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "snack"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "就",
        "pinyin": "jiu4",
        "definition": "then"
      },
      {
        "char": "应",
        "pinyin": "ying1",
        "definition": "should"
      },
      {
        "char": "善",
        "pinyin": "shan4",
        "definition": "to be good at"
      },
      {
        "char": "于",
        "pinyin": "yu2",
        "definition": "to be good at"
      },
      {
        "char": "控",
        "pinyin": "kong4",
        "definition": "to control"
      },
      {
        "char": "制",
        "pinyin": "zhi4",
        "definition": "to control"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "往",
        "pinyin": "wang3",
        "definition": "often"
      },
      {
        "char": "往",
        "pinyin": "wang3",
        "definition": "often"
      },
      {
        "char": "这",
        "pinyin": "zhe4",
        "definition": "this"
      },
      {
        "char": "样",
        "pinyin": "yang4",
        "definition": "like"
      },
      {
        "char": "做",
        "pinyin": "zuo4",
        "definition": "to do"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "优",
        "pinyin": "you1",
        "definition": "merit"
      },
      {
        "char": "点",
        "pinyin": "dian3",
        "definition": "merit"
      },
      {
        "char": "会",
        "pinyin": "hui4",
        "definition": "will"
      },
      {
        "char": "更",
        "pinyin": "geng4",
        "definition": "more"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "more"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "虽",
        "pinyin": "sui1",
        "definition": "although"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "although"
      },
      {
        "char": "加",
        "pinyin": "jia1",
        "definition": "to work overtime"
      },
      {
        "char": "班",
        "pinyin": "ban1",
        "definition": "to work overtime"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "awful"
      },
      {
        "char": "怕",
        "pinyin": "pa4",
        "definition": "awful"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "但",
        "pinyin": "dan4",
        "definition": "but"
      },
      {
        "char": "我",
        "pinyin": "wo3",
        "definition": "I"
      },
      {
        "char": "们",
        "pinyin": "men5",
        "definition": "plural"
      },
      {
        "char": "握",
        "pinyin": "wo4",
        "definition": "to shake hands"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "to shake hands"
      },
      {
        "char": "庆",
        "pinyin": "qing4",
        "definition": "to celebrate"
      },
      {
        "char": "祝",
        "pinyin": "zhu4",
        "definition": "to celebrate"
      },
      {
        "char": "成",
        "pinyin": "cheng2",
        "definition": "success"
      },
      {
        "char": "功",
        "pinyin": "gong1",
        "definition": "success"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you"
      },
      {
        "char": "能",
        "pinyin": "neng2",
        "definition": "ability"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "ability"
      },
      {
        "char": "真",
        "pinyin": "zhen1",
        "definition": "really"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "祝",
        "pinyin": "zhu4",
        "definition": "to wish"
      },
      {
        "char": "贺",
        "pinyin": "he4",
        "definition": "to congratulate"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you"
      },
      {
        "char": "！",
        "pinyin": "！",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "晴",
        "pinyin": "qing2",
        "definition": "sunny"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "sunny"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "心",
        "pinyin": "xin1",
        "definition": "heart"
      },
      {
        "char": "情",
        "pinyin": "qing2",
        "definition": "mood"
      },
      {
        "char": "也",
        "pinyin": "ye3",
        "definition": "also"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "好",
        "pinyin": "hao3",
        "definition": "good"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "因",
        "pinyin": "yin1",
        "definition": "because"
      },
      {
        "char": "为",
        "pinyin": "wei4",
        "definition": "because"
      },
      {
        "char": "今",
        "pinyin": "jin1",
        "definition": "today"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "today"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "所",
        "pinyin": "suo3",
        "definition": "so"
      },
      {
        "char": "以",
        "pinyin": "yi3",
        "definition": "so"
      },
      {
        "char": "我",
        "pinyin": "wo3",
        "definition": "I"
      },
      {
        "char": "决",
        "pinyin": "jue2",
        "definition": "to decide"
      },
      {
        "char": "定",
        "pinyin": "ding4",
        "definition": "to decide"
      },
      {
        "char": "去",
        "pinyin": "qu4",
        "definition": "to go"
      },
      {
        "char": "外",
        "pinyin": "wai4",
        "definition": "outside"
      },
      {
        "char": "出",
        "pinyin": "chu1",
        "definition": "to go out"
      },
      {
        "char": "散",
        "pinyin": "san4",
        "definition": "to stroll"
      },
      {
        "char": "步",
        "pinyin": "bu4",
        "definition": "to stroll"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "你",
        "pinyin": "ni3",
        "definition": "you"
      },
      {
        "char": "想",
        "pinyin": "xiang3",
        "definition": "to want"
      },
      {
        "char": "一起",
        "pinyin": "yi4",
        "definition": "together"
      },
      {
        "char": "qi3",
        "pinyin": "qi3",
        "definition": "together"
      },
      {
        "char": "吗",
        "pinyin": "ma5",
        "definition": "question particle"
      },
      {
        "char": "？",
        "pinyin": "？",
        "definition": "punctuation"
      }
    ]
  ],
  "hard": [
    [
      {
        "char": "进",
        "pinyin": "jin4",
        "definition": "to enter"
      },
      {
        "char": "入",
        "pinyin": "ru4",
        "definition": "to enter"
      },
      {
        "char": "二",
        "pinyin": "er4",
        "definition": "two"
      },
      {
        "char": "十",
        "pinyin": "shi2",
        "definition": "ten"
      },
      {
        "char": "一",
        "pinyin": "yi4",
        "definition": "one"
      },
      {
        "char": "世",
        "pinyin": "shi4",
        "definition": "century"
      },
      {
        "char": "纪",
        "pinyin": "ji4",
        "definition": "century"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "跨",
        "pinyin": "kua4",
        "definition": "transnational"
      },
      {
        "char": "国",
        "pinyin": "guo2",
        "definition": "transnational"
      },
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "company"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "company"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "吸",
        "pinyin": "xi1",
        "definition": "to attract"
      },
      {
        "char": "引",
        "pinyin": "yin3",
        "definition": "to attract"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "overseas"
      },
      {
        "char": "外",
        "pinyin": "wai4",
        "definition": "overseas"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person"
      },
      {
        "char": "才",
        "pinyin": "cai2",
        "definition": "talent"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "们",
        "pinyin": "men0",
        "definition": "plural"
      },
      {
        "char": "被",
        "pinyin": "bei4",
        "definition": "passive marker"
      },
      {
        "char": "雇",
        "pinyin": "gu4",
        "definition": "to hire"
      },
      {
        "char": "佣",
        "pinyin": "yong1",
        "definition": "to hire"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "公",
        "pinyin": "gong1",
        "definition": "company"
      },
      {
        "char": "司",
        "pinyin": "si1",
        "definition": "company"
      },
      {
        "char": "变",
        "pinyin": "bian4",
        "definition": "to become"
      },
      {
        "char": "强",
        "pinyin": "qiang2",
        "definition": "strong"
      },
      {
        "char": "大",
        "pinyin": "da4",
        "definition": "big"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "海",
        "pinyin": "hai3",
        "definition": "sea turtle"
      },
      {
        "char": "龟",
        "pinyin": "gui1",
        "definition": "sea turtle"
      },
      {
        "char": "从",
        "pinyin": "cong2",
        "definition": "from"
      },
      {
        "char": "国",
        "pinyin": "guo2",
        "definition": "abroad"
      },
      {
        "char": "外",
        "pinyin": "wai4",
        "definition": "abroad"
      },
      {
        "char": "归",
        "pinyin": "gui1",
        "definition": "to return"
      },
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "to return"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "这",
        "pinyin": "zhe4",
        "definition": "this"
      },
      {
        "char": "事",
        "pinyin": "shi4",
        "definition": "matter"
      },
      {
        "char": "儿",
        "pinyin": "er2",
        "definition": "noun suffix"
      },
      {
        "char": "被",
        "pinyin": "bei4",
        "definition": "passive marker"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "person"
      },
      {
        "char": "叫",
        "pinyin": "jiao4",
        "definition": "to call"
      },
      {
        "char": "做",
        "pinyin": "zuo4",
        "definition": "to do"
      },
      {
        "char": "回",
        "pinyin": "hui2",
        "definition": "to return"
      },
      {
        "char": "国",
        "pinyin": "guo2",
        "definition": "country"
      },
      {
        "char": "潮",
        "pinyin": "chao2",
        "definition": "tide"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "找",
        "pinyin": "zhao3",
        "definition": "to look for"
      },
      {
        "char": "工",
        "pinyin": "gong1",
        "definition": "work"
      },
      {
        "char": "作",
        "pinyin": "zuo4",
        "definition": "work"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "积",
        "pinyin": "ji1",
        "definition": "accumulate"
      },
      {
        "char": "累",
        "pinyin": "lei3",
        "definition": "tired"
      },
      {
        "char": "的",
        "pinyin": "de0",
        "definition": "particle"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "experience"
      },
      {
        "char": "验",
        "pinyin": "yan4",
        "definition": "experience"
      },
      {
        "char": "用",
        "pinyin": "yong4",
        "definition": "to use"
      },
      {
        "char": "在",
        "pinyin": "zai4",
        "definition": "at"
      },
      {
        "char": "产",
        "pinyin": "chan3",
        "definition": "product"
      },
      {
        "char": "品",
        "pinyin": "pin3",
        "definition": "product"
      },
      {
        "char": "上",
        "pinyin": "shang4",
        "definition": "up"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "销",
        "pinyin": "xiao1",
        "definition": "to sell"
      },
      {
        "char": "售",
        "pinyin": "shou4",
        "definition": "to sell"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "新",
        "pinyin": "xin1",
        "definition": "new"
      },
      {
        "char": "套",
        "pinyin": "tao4",
        "definition": "suit"
      },
      {
        "char": "装",
        "pinyin": "zhuang1",
        "definition": "suit"
      },
      {
        "char": "穿",
        "pinyin": "chuan1",
        "definition": "to wear"
      },
      {
        "char": "上",
        "pinyin": "shang4",
        "definition": "to put on"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "但",
        "pinyin": "dan4",
        "definition": "but"
      },
      {
        "char": "上",
        "pinyin": "shang4",
        "definition": "upper"
      },
      {
        "char": "衣",
        "pinyin": "yi1",
        "definition": "upper"
      },
      {
        "char": "被",
        "pinyin": "bei4",
        "definition": "passive marker"
      },
      {
        "char": "雨",
        "pinyin": "yu3",
        "definition": "rain"
      },
      {
        "char": "弄",
        "pinyin": "nong4",
        "definition": "to make"
      },
      {
        "char": "湿",
        "pinyin": "shi1",
        "definition": "wet"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "脱",
        "pinyin": "tuo1",
        "definition": "to take off"
      },
      {
        "char": "掉",
        "pinyin": "diao4",
        "definition": "away"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "换",
        "pinyin": "huan4",
        "definition": "to change"
      },
      {
        "char": "干",
        "pinyin": "gan1",
        "definition": "dry"
      },
      {
        "char": "净",
        "pinyin": "jing4",
        "definition": "clean"
      },
      {
        "char": "的",
        "pinyin": "de0",
        "definition": "particle"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "去",
        "pinyin": "qu4",
        "definition": "to go"
      },
      {
        "char": "工",
        "pinyin": "gong1",
        "definition": "work"
      },
      {
        "char": "作",
        "pinyin": "zuo4",
        "definition": "work"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "总",
        "pinyin": "zong3",
        "definition": "chief"
      },
      {
        "char": "经",
        "pinyin": "jing1",
        "definition": "manager"
      },
      {
        "char": "理",
        "pinyin": "li3",
        "definition": "manager"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "严",
        "pinyin": "yan2",
        "definition": "serious"
      },
      {
        "char": "肃",
        "pinyin": "su4",
        "definition": "serious"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "做",
        "pinyin": "zuo4",
        "definition": "to do"
      },
      {
        "char": "事",
        "pinyin": "shi4",
        "definition": "matter"
      },
      {
        "char": "太",
        "pinyin": "tai4",
        "definition": "too"
      },
      {
        "char": "吓",
        "pinyin": "xia4",
        "definition": "scary"
      },
      {
        "char": "人",
        "pinyin": "ren2",
        "definition": "scary"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "错",
        "pinyin": "cuo4",
        "definition": "mistake"
      },
      {
        "char": "误",
        "pinyin": "wu4",
        "definition": "mistake"
      },
      {
        "char": "解",
        "pinyin": "jie3",
        "definition": "explain"
      },
      {
        "char": "释",
        "pinyin": "shi4",
        "definition": "explain"
      },
      {
        "char": "清",
        "pinyin": "qing1",
        "definition": "clear"
      },
      {
        "char": "楚",
        "pinyin": "chu3",
        "definition": "clear"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "改",
        "pinyin": "gai3",
        "definition": "to change"
      },
      {
        "char": "正",
        "pinyin": "zheng4",
        "definition": "to correct"
      },
      {
        "char": "计",
        "pinyin": "ji4",
        "definition": "plan"
      },
      {
        "char": "划",
        "pinyin": "hua4",
        "definition": "plan"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "拿",
        "pinyin": "na2",
        "definition": "to take"
      },
      {
        "char": "到",
        "pinyin": "dao4",
        "definition": "to get"
      },
      {
        "char": "满",
        "pinyin": "man3",
        "definition": "satisfied"
      },
      {
        "char": "意",
        "pinyin": "yi4",
        "definition": "satisfied"
      },
      {
        "char": "结",
        "pinyin": "jie2",
        "definition": "result"
      },
      {
        "char": "果",
        "pinyin": "guo3",
        "definition": "result"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "sky"
      },
      {
        "char": "空",
        "pinyin": "kong1",
        "definition": "sky"
      },
      {
        "char": "阴",
        "pinyin": "yin1",
        "definition": "overcast"
      },
      {
        "char": "转",
        "pinyin": "zhuan3",
        "definition": "to turn"
      },
      {
        "char": "云",
        "pinyin": "yun2",
        "definition": "cloud"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "要",
        "pinyin": "yao4",
        "definition": "to want"
      },
      {
        "char": "下",
        "pinyin": "xia4",
        "definition": "to fall"
      },
      {
        "char": "雨",
        "pinyin": "yu3",
        "definition": "rain"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "录",
        "pinyin": "lu4",
        "definition": "employ"
      },
      {
        "char": "用",
        "pinyin": "yong4",
        "definition": "employ"
      },
      {
        "char": "通",
        "pinyin": "tong1",
        "definition": "notice"
      },
      {
        "char": "知",
        "pinyin": "zhi1",
        "definition": "notice"
      },
      {
        "char": "寄",
        "pinyin": "ji4",
        "definition": "to send"
      },
      {
        "char": "走",
        "pinyin": "zou3",
        "definition": "to leave"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "关",
        "pinyin": "guan1",
        "definition": "to close"
      },
      {
        "char": "窗",
        "pinyin": "chuang1",
        "definition": "window"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "坐",
        "pinyin": "zuo4",
        "definition": "to sit"
      },
      {
        "char": "下",
        "pinyin": "xia4",
        "definition": "down"
      },
      {
        "char": "等",
        "pinyin": "deng3",
        "definition": "to wait"
      },
      {
        "char": "候",
        "pinyin": "hou4",
        "definition": "to wait"
      },
      {
        "char": "天",
        "pinyin": "tian1",
        "definition": "day"
      },
      {
        "char": "晴",
        "pinyin": "qing2",
        "definition": "sunny"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "既",
        "pinyin": "ji4",
        "definition": "since"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "since"
      },
      {
        "char": "接",
        "pinyin": "jie1",
        "definition": "to receive"
      },
      {
        "char": "到",
        "pinyin": "dao4",
        "definition": "to arrive"
      },
      {
        "char": "回",
        "pinyin": "hui2",
        "definition": "to answer"
      },
      {
        "char": "答",
        "pinyin": "da2",
        "definition": "to answer"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "看",
        "pinyin": "kan4",
        "definition": "to look"
      },
      {
        "char": "清",
        "pinyin": "qing1",
        "definition": "clear"
      },
      {
        "char": "楚",
        "pinyin": "chu3",
        "definition": "clear"
      },
      {
        "char": "短",
        "pinyin": "duan3",
        "definition": "short"
      },
      {
        "char": "期",
        "pinyin": "qi1",
        "definition": "term"
      },
      {
        "char": "任",
        "pinyin": "ren4",
        "definition": "duty"
      },
      {
        "char": "务",
        "pinyin": "wu4",
        "definition": "duty"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "准",
        "pinyin": "zhun3",
        "definition": "to prepare"
      },
      {
        "char": "备",
        "pinyin": "bei4",
        "definition": "to prepare"
      },
      {
        "char": "材",
        "pinyin": "cai2",
        "definition": "material"
      },
      {
        "char": "料",
        "pinyin": "liao4",
        "definition": "material"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "好",
        "pinyin": "hao3",
        "definition": "good"
      },
      {
        "char": "在",
        "pinyin": "zai4",
        "definition": "at"
      },
      {
        "char": "产",
        "pinyin": "chan3",
        "definition": "product"
      },
      {
        "char": "品",
        "pinyin": "pin3",
        "definition": "product"
      },
      {
        "char": "无",
        "pinyin": "wu2",
        "definition": "none"
      },
      {
        "char": "缺",
        "pinyin": "que1",
        "definition": "defect"
      },
      {
        "char": "点",
        "pinyin": "dian3",
        "definition": "defect"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "善",
        "pinyin": "shan4",
        "definition": "good at"
      },
      {
        "char": "于",
        "pinyin": "yu2",
        "definition": "at"
      },
      {
        "char": "吃",
        "pinyin": "chi1",
        "definition": "to eat"
      },
      {
        "char": "零",
        "pinyin": "ling2",
        "definition": "snack"
      },
      {
        "char": "食",
        "pinyin": "shi2",
        "definition": "snack"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "往",
        "pinyin": "wang3",
        "definition": "often"
      },
      {
        "char": "往",
        "pinyin": "wang3",
        "definition": "often"
      },
      {
        "char": "被",
        "pinyin": "bei4",
        "definition": "passive marker"
      },
      {
        "char": "同",
        "pinyin": "tong2",
        "definition": "colleague"
      },
      {
        "char": "事",
        "pinyin": "shi4",
        "definition": "colleague"
      },
      {
        "char": "笑",
        "pinyin": "xiao4",
        "definition": "to laugh"
      },
      {
        "char": "话",
        "pinyin": "hua4",
        "definition": "to laugh"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "优",
        "pinyin": "you1",
        "definition": "merit"
      },
      {
        "char": "点",
        "pinyin": "dian3",
        "definition": "merit"
      },
      {
        "char": "显",
        "pinyin": "xian3",
        "definition": "to show"
      },
      {
        "char": "示",
        "pinyin": "shi4",
        "definition": "to show"
      },
      {
        "char": "出",
        "pinyin": "chu1",
        "definition": "out"
      },
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "to come"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "加",
        "pinyin": "jia1",
        "definition": "to work"
      },
      {
        "char": "班",
        "pinyin": "ban1",
        "definition": "to work"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "获",
        "pinyin": "huo4",
        "definition": "to gain"
      },
      {
        "char": "得",
        "pinyin": "de2",
        "definition": "to gain"
      },
      {
        "char": "认",
        "pinyin": "ren4",
        "definition": "recognize"
      },
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "recognize"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "可",
        "pinyin": "ke3",
        "definition": "terrible"
      },
      {
        "char": "怕",
        "pinyin": "pa4",
        "definition": "terrible"
      },
      {
        "char": "的",
        "pinyin": "de0",
        "definition": "particle"
      },
      {
        "char": "事",
        "pinyin": "shi4",
        "definition": "matter"
      },
      {
        "char": "情",
        "pinyin": "qing2",
        "definition": "matter"
      },
      {
        "char": "发",
        "pinyin": "fa1",
        "definition": "to happen"
      },
      {
        "char": "生",
        "pinyin": "sheng1",
        "definition": "to happen"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "门",
        "pinyin": "men2",
        "definition": "door"
      },
      {
        "char": "关",
        "pinyin": "guan1",
        "definition": "to close"
      },
      {
        "char": "紧",
        "pinyin": "jin3",
        "definition": "to close"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "冷",
        "pinyin": "leng3",
        "definition": "calm"
      },
      {
        "char": "静",
        "pinyin": "jing4",
        "definition": "calm"
      },
      {
        "char": "地",
        "pinyin": "di0",
        "definition": "particle"
      },
      {
        "char": "思",
        "pinyin": "si1",
        "definition": "to think"
      },
      {
        "char": "考",
        "pinyin": "kao3",
        "definition": "to think"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "找",
        "pinyin": "zhao3",
        "definition": "to find"
      },
      {
        "char": "出",
        "pinyin": "chu1",
        "definition": "out"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "方",
        "pinyin": "fang1",
        "definition": "method"
      },
      {
        "char": "法",
        "pinyin": "fa3",
        "definition": "method"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "初",
        "pinyin": "chu1",
        "definition": "beginning"
      },
      {
        "char": "次",
        "pinyin": "ci4",
        "definition": "beginning"
      },
      {
        "char": "见",
        "pinyin": "jian4",
        "definition": "to meet"
      },
      {
        "char": "面",
        "pinyin": "mian4",
        "definition": "to meet"
      },
      {
        "char": "要",
        "pinyin": "yao4",
        "definition": "must"
      },
      {
        "char": "握",
        "pinyin": "wo4",
        "definition": "to shake"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "to shake"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "礼",
        "pinyin": "li3",
        "definition": "etiquette"
      },
      {
        "char": "貌",
        "pinyin": "mao4",
        "definition": "etiquette"
      },
      {
        "char": "很",
        "pinyin": "hen3",
        "definition": "very"
      },
      {
        "char": "重",
        "pinyin": "zhong4",
        "definition": "important"
      },
      {
        "char": "要",
        "pinyin": "yao4",
        "definition": "important"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "手",
        "pinyin": "shou3",
        "definition": "hand"
      },
      {
        "char": "伸",
        "pinyin": "shen1",
        "definition": "to stretch"
      },
      {
        "char": "出",
        "pinyin": "chu1",
        "definition": "out"
      },
      {
        "char": "来",
        "pinyin": "lai2",
        "definition": "to come"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "微",
        "pinyin": "wei1",
        "definition": "smile"
      },
      {
        "char": "笑",
        "pinyin": "xiao4",
        "definition": "smile"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "结",
        "pinyin": "jie2",
        "definition": "end"
      },
      {
        "char": "束",
        "pinyin": "shu4",
        "definition": "end"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "交",
        "pinyin": "jiao1",
        "definition": "exchange"
      },
      {
        "char": "谈",
        "pinyin": "tan2",
        "definition": "exchange"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ],
    [
      {
        "char": "能",
        "pinyin": "neng2",
        "definition": "ability"
      },
      {
        "char": "力",
        "pinyin": "li4",
        "definition": "ability"
      },
      {
        "char": "不",
        "pinyin": "bu2",
        "definition": "not"
      },
      {
        "char": "足",
        "pinyin": "zu2",
        "definition": "not"
      },
      {
        "char": "怎",
        "pinyin": "zen3",
        "definition": "how"
      },
      {
        "char": "么",
        "pinyin": "me0",
        "definition": "how"
      },
      {
        "char": "办",
        "pinyin": "ban4",
        "definition": "to do"
      },
      {
        "char": "？",
        "pinyin": "？",
        "definition": "punctuation"
      },
      {
        "char": "他",
        "pinyin": "ta1",
        "definition": "he"
      },
      {
        "char": "先",
        "pinyin": "xian1",
        "definition": "first"
      },
      {
        "char": "把",
        "pinyin": "ba3",
        "definition": "take"
      },
      {
        "char": "书",
        "pinyin": "shu1",
        "definition": "book"
      },
      {
        "char": "读",
        "pinyin": "du2",
        "definition": "to read"
      },
      {
        "char": "懂",
        "pinyin": "dong3",
        "definition": "to understand"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "然",
        "pinyin": "ran2",
        "definition": "then"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "then"
      },
      {
        "char": "多",
        "pinyin": "duo1",
        "definition": "much"
      },
      {
        "char": "练",
        "pinyin": "lian4",
        "definition": "to practice"
      },
      {
        "char": "习",
        "pinyin": "xi2",
        "definition": "to practice"
      },
      {
        "char": "，",
        "pinyin": "，",
        "definition": "punctuation"
      },
      {
        "char": "最",
        "pinyin": "zui4",
        "definition": "last"
      },
      {
        "char": "后",
        "pinyin": "hou4",
        "definition": "last"
      },
      {
        "char": "终",
        "pinyin": "zhong1",
        "definition": "finally"
      },
      {
        "char": "于",
        "pinyin": "yu2",
        "definition": "finally"
      },
      {
        "char": "成",
        "pinyin": "cheng2",
        "definition": "to become"
      },
      {
        "char": "功",
        "pinyin": "gong1",
        "definition": "to become"
      },
      {
        "char": "了",
        "pinyin": "le0",
        "definition": "particle"
      },
      {
        "char": "。",
        "pinyin": "。",
        "definition": "punctuation"
      }
    ]
  ]
}
};
