const input = document.getElementById('weight');

const bucket = document.getElementById('bucket');
const multrys0 = document.getElementById('multrys0');
const zinc0 = document.getElementById('zinc0');
const copper0 = document.getElementById('copper0');
const selenium0 = document.getElementById('selenium0');
const manganese0 = document.getElementById('manganese0');

const multrys = document.getElementById('multrys');
const zinc = document.getElementById('zinc');
const copper = document.getElementById('copper');
const selenium = document.getElementById('selenium');
const manganese = document.getElementById('manganese');

const zincM = document.getElementById('zincM');
const copperM = document.getElementById('copperM');
const seleniumM = document.getElementById('seleniumM');
const manganeseM = document.getElementById('manganeseM');

let multrysValue;

input.onkeyup = changeHandler;

const f = num => num * 100000;
const g = num => num / 100000;

function changeHandler(e) {
	let value = f(+e.target.value).toFixed(0);
	// console.log(e.target.value);

	switch (true) {
		case value >= f(0.4) && value < f(0.6):
			bucket.innerText = '0.4 - 0.59';
			zinc0.innerText = 400;
			copper0.innerText = 40;
			selenium0.innerText = 7;
			manganese0.innerText = 1;
			multrys0.innerText = 0;

			multrysT.innerText = 'NONE';
			zincT.innerText = g(400 * value);
			copperT.innerText = g(40 * value);
			seleniumT.innerText = g(7 * value);
			manganeseT.innerText = g(1 * value);

			multrys.innerText = '';
			zinc.innerText = g(400 * value);
			copper.innerText = g(40 * value);
			selenium.innerText = g(7 * value);
			manganese.innerText = g(1 * value);

			break;
		case value >= f(0.6) && value < f(3.0):
			bucket.innerText = '0.6 - 3.0';
			multrys0.innerText = 0.3;
			zinc0.innerText = 400;
			copper0.innerText = 40;
			selenium0.innerText = 7;
			manganese0.innerText = 1;

			multrysValue = value * 0.3;

			multrysT.innerText = g(multrysValue);
			zincT.innerText = g(400 * value);
			copperT.innerText = g(40 * value);
			seleniumT.innerText = g(7 * value);
			manganeseT.innerText = g(1 * value);

			zincM.innerText = g(multrysValue * 1000);
			copperM.innerText = g(multrysValue * 60);
			seleniumM.innerText = g(multrysValue * 6);
			manganeseM.innerText = g(multrysValue * 3);

			zinc.innerText = g(400 * value - multrysValue * 1000);
			copper.innerText = g(40 * value - multrysValue * 60);
			selenium.innerText = g(7 * value - multrysValue * 6);
			manganese.innerText = g(1 * value - multrysValue * 3);

			multrys.innerText = g(multrysValue);

			break;

		case value >= f(3) && value < f(4):
			bucket.innerText = '3-3.9';

			multrys0.innerText = 'Fixed 1mL';
			zinc0.innerText = 0;
			copper0.innerText = 0;
			selenium0.innerText = 0;
			manganese0.innerText = 0;

			multrys.innerText = 1;
			zinc.innerText = 'NONE';
			copper.innerText = 'NONE';
			selenium.innerText = 'NONE';
			manganese.innerText = 'NONE';

			break;

		case value >= f(4) && value <= f(9.9):
			bucket.innerText = '4-9.9';

			multrys0.innerText = 'Fixed 1mL';
			zinc0.innerText = 0;
			copper0.innerText = 20;
			selenium0.innerText = 2;
			manganese0.innerText = 0;

			multrysValue = 1;

			multrysT.innerText = 1;
			zincT.innerText = 1000;
			copperT.innerText = g(20 * value);
			seleniumT.innerText = g(2 * value);
			manganeseT.innerText = 3;

			zincM.innerText = 1000;
			copperM.innerText = 60;
			seleniumM.innerText = 6;
			manganeseM.innerText = 3;

			zinc.innerText = 'NONE';
			copper.innerText = g(20 * value - f(60));
			selenium.innerText = g(2 * value - f(6));
			manganese.innerText = 'NONE';

			multrys.innerText = multrysValue;

			break;

		default:
			bucket.innerText = '___';

			multrys0.innerText = '___';
			zinc0.innerText = '___';
			copper0.innerText = '___';
			selenium0.innerText = '___';
			manganese0.innerText = '___';

			multrysT.innerText = '___';
			zincT.innerText = '___';
			copperT.innerText = '___';
			seleniumT.innerText = '___';
			manganeseT.innerText = '___';

			zincM.innerText = '___';
			copperM.innerText = '___';
			seleniumM.innerText = '___';
			manganeseM.innerText = '___';

			multrys.innerText = '___';
			zinc.innerText = '___';
			copper.innerText = '___';
			selenium.innerText = '___';
			manganese.innerText = '___';
	}
}
