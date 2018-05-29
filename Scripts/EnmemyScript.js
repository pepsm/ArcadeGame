<<<<<<< HEAD
﻿var EnemyHealth : int = 10;

function DeductPoints (DamageAmount : int) {
	EnemyHealth -= DamageAmount;
}

function Update () {
	if (EnemyHealth <= 0) {
		Destroy(gameObject);
	}
=======
﻿var EnemyHealth : int = 10;

function DeductPoints (DamageAmount : int) {
	EnemyHealth -= DamageAmount;
}

function Update () {
	if (EnemyHealth <= 0) {
		Destroy(gameObject);
	}
>>>>>>> 416bb19edcc99a854f8e26b06ded8d914e8b3eae
}