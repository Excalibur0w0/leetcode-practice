const nums = ["200.00", "201.15", "1015", "2000101020005"];

const sav = [
	"",
	"十",
	"百",
	"千",
	"万",
	"十万",
	"百万",
	"千万",
	"亿",
	"十亿",
	"百亿",
	"千亿",
	"兆",
	"十兆",
	"百兆",
	"千兆",
	"京",
	"十京",
	"百京",
	"千京",
];
const dig = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];

const solution = str => {
	let tmp = str.split(".");
	let zDig = tmp[0];
	let dDig = tmp[1];
	let res = "";
	let prevChar = "";

	for (let i = 0, len = zDig.length; i < len; i++) {
		let curNum = parseInt(zDig[i]);
		let curChar = dig[curNum];

		if (curChar != "零") {
			res += curChar;
		} else if (prevChar != curChar) {
			res += curChar;
		}
		prevChar = curChar;
		if (curNum != 0) {
			res += sav[len - i - 1];
		}
	}

	if (res[res.length - 1] == "零") {
		res = res.substring(0, res.length - 1);
	}

	res += "元";

	if (dDig && dDig.length > 0 && parseInt(dDig) != 0) {
		let jiaoNum = dig[parseInt(dDig[0])];
		let fenNum = dig[parseInt(dDig[1])];

		res += jiaoNum + "角" + fenNum + "分";
	} else {
		res += "整";
	}

	return res;
};

const zhfy = nums => {
	return nums.map(mem => solution(mem));
};

let start = new Date();
console.log(zhfy(nums));
console.log(new Date() - start + "ms");
