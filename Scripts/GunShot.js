var Flash : GameObject;
function Update () { 
	
	if(GlobalAmmo.LoadedAmmo >= 1){
		//Edit/ProjectSettings/Input
		if(Input.GetButtonDown("Fire1")) {
			var gunsound : AudioSource = GetComponent.<AudioSource>();
			gunsound.Play();
			Flash.SetActive(true);
			MuzzleOff();
			GetComponent.<Animation>().Play("GunShot");
			GlobalAmmo.LoadedAmmo -= 1;
		}
	}

}

function MuzzleOff() {
	 yield WaitForSeconds(0.1);
	 Flash.SetActive(false);
}