<<<<<<< HEAD
﻿var AmmoSound : AudioSource;


function OnTriggerEnter (col : Collider) {
	AmmoSound.Play();
	if (GlobalAmmo.LoadedAmmo == 0) {
			GlobalAmmo.LoadedAmmo += 10;
			this.gameObject.SetActive(false);
		}
		else {
			GlobalAmmo.CurrentAmmo += 10;
			this.gameObject.SetActive(false);
		}
=======
﻿var AmmoSound : AudioSource;


function OnTriggerEnter (col : Collider) {
	AmmoSound.Play();
	if (GlobalAmmo.LoadedAmmo == 0) {
			GlobalAmmo.LoadedAmmo += 10;
			this.gameObject.SetActive(false);
		}
		else {
			GlobalAmmo.CurrentAmmo += 10;
			this.gameObject.SetActive(false);
		}
>>>>>>> 416bb19edcc99a854f8e26b06ded8d914e8b3eae
}