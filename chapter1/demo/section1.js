function sortChinese(arr) {

    if (!String.prototype.localeCompare) return null;

    var letters = "abcdefghjklmnopqrstwxyz".split("");
    var zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split("");

    var segs = [];
    var curr;
    letters.forEach(function(item, i) {
        curr = { letter: "", data: [] };
        arr.forEach(function(item2) {
            if (
                (!zh[i - 1] || zh[i - 1].localeCompare(item2, "zh") <= 0) &&
                item2.localeCompare(zh[i], "zh") == -1
            ) {
                curr.letter = letters[i - 1];
                curr.data.push(item2);
            }
        });
        if (curr.data.length) {
            segs.push(curr);
            curr.data.sort(function(a, b) {
                return a.localeCompare(b, "zh");
            });
        }
    });

    return segs;
}

sortChinese([
  "糖饼",
  "绿箭",
  "灿灿",
  "曼巴",
  "天吴",
  "芝士",
  "东邪",
  "瓶子",
  "云芦",
  "白陀",
  "菜瓜",
  "城管",
  "枫叶",
  "花生",
  "流浪人",
  "雪碧"
]);

console.log(888);
