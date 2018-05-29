<<<<<<< HEAD
﻿
var ReloadSound : AudioSource;
var CrossObject : GameObject;
var MechanicsObject : GameObject;
var ClipCount : int;
var ReserveCount : int;
var ReloadAvailable : int;

function Update () {
	ClipCount = GlobalAmmo.LoadedAmmo;
	ReserveCount = GlobalAmmo.CurrentAmmo;

	if (ReserveCount == 0) {
		ReloadAvailable = 0;
	}
	else {
		ReloadAvailable = 10 - ClipCount;
	}

	if(Input.GetButtonDown("Reload")) {
		if (ReloadAvailable >= 1) {
			if (ReserveCount <= ReloadAvailable) {
				GlobalAmmo.LoadedAmmo += ReserveCount;
				GlobalAmmo.CurrentAmmo -= ReserveCount;
				ActionReload();
			}
			else {
				GlobalAmmo.LoadedAmmo += ReloadAvailable;
				GlobalAmmo.CurrentAmmo -= ReloadAvailable;
				ActionReload();
			}
		}
	EnableScripts();

	}
}

function EnableScripts () {
	yield WaitForSeconds (1.1);
			this.GetComponent("GunShot").enabled=true;
			CrossObject.SetActive(true);
			MechanicsObject.SetActive(true);
}

function ActionReload () {
	this.GetComponent("GunShot").enabled=false;
	CrossObject.SetActive(false);
	MechanicsObject.SetActive(false);
	ReloadSound.Play();
	GetComponent.<Animation>().Play("HandgunReload");
=======
﻿
var ReloadSound : AudioSource;
var CrossObject : GameObject;
var MechanicsObject : GameObject;
var ClipCount : int;
var ReserveCount : int;
var ReloadAvailable : int;

function Update () {
	ClipCount = GlobalAmmo.LoadedAmmo;
	ReserveCount = GlobalAmmo.CurrentAmmo;

	if (ReserveCount == 0) {
		ReloadAvailable = 0;
	}
	else {
		ReloadAvailable = 10 - ClipCount;
	}

	if(Input.GetButtonDown("Reload")) {
		if (ReloadAvailable >= 1) {
			if (ReserveCount <= ReloadAvailable) {
				GlobalAmmo.LoadedAmmo += ReserveCount;
				GlobalAmmo.CurrentAmmo -= ReserveCount;
				ActionReload();
			}
			else {
				GlobalAmmo.LoadedAmmo += ReloadAvailable;
				GlobalAmmo.CurrentAmmo -= ReloadAvailable;
				ActionReload();
			}
		}
	EnableScripts();

	}
}

function EnableScripts () {
	yield WaitForSeconds (1.1);
			this.GetComponent("GunShot").enabled=true;
			CrossObject.SetActive(true);
			MechanicsObject.SetActive(true);
}

function ActionReload () {
	this.GetComponent("GunShot").enabled=false;
	CrossObject.SetActive(false);
	MechanicsObject.SetActive(false);
	ReloadSound.Play();
	GetComponent.<Animation>().Play("HandgunReload");
>>>>>>> 416bb19edcc99a854f8e26b06ded8d914e8b3eae
}