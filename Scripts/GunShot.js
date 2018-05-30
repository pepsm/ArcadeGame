var GunShotSound : AudioSource;
var flash : GameObject;

function Update () { 
	
	if(GlobalAmmo.LoadedAmmo >= 1){
		//Edit/ProjectSettings/Input
		if(Input.GetButtonDown("Fire1")) {
			
			GunShotSound.Play();
			flash.SetActive(true);
			MuzzleOff();
			GetComponent.<Animation>().Play("GunShot");
			GlobalAmmo.LoadedAmmo -= 1;
		}
	}

}
function MuzzleOff(){
	yield WaitForSeconds(0.1);
	flash.SetActive(false);
}
