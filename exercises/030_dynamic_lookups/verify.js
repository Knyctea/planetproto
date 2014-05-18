assertions = require('../../lib/assertions');

function verify(exercise, userMod, verifyCallback){

	function fail(msg) {
		exercise.emit('fail', msg);
		return verifyCallback(msg, false);
	}

	var machine = userMod.machine;
	var robot    = userMod.robot;
	var vehicle    = userMod.vehicle;

	if (!machine) {
		return fail('You must export a machine variable');
	}

	if (!robot) {
		return fail('You must export a robot variable');
	}

	if (!vehicle) {
		return fail('You must export a vehicle variable');
	}

	if (robot.__proto__ != machine) {
		return fail('machine must be the prototype of robot');
	}

	if (vehicle.__proto__ != machine) {
		return fail('machine must be the prototype of vehicle');
	}

	if (vehicle.hasOwnProperty('legs')) {
		return fail('vehicle must not define legs directly');
	}

	if (robot.hasOwnProperty('legs')) {
		return fail('robot must not define legs directly');
	}


	verifyCallback(null, true)
}

module.exports = verify;
