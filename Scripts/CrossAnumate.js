var UpCurs : GameObject;
var DownCurs : GameObject;
var LeftCurs : GameObject;
var RightCurs : GameObject;



function Update () {

	if(GlobalAmmo.LoadedAmmo >= 1){

		if (Input.GetButtonDown("Fire1")) {
			UpCurs.GetComponent("Animator").enabled=true;
			DownCurs.GetComponent("Animator").enabled=true;
			LeftCurs.GetComponent("Animator").enabled=true;
			RightCurs.GetComponent("Animator").enabled=true;
			//Can't use yield here
			WaitingAnim();
		}
	}
}

function WaitingAnim () {
	yield WaitForSeconds(0.1);
	UpCurs.GetComponent("Animator").enabled=false;
	DownCurs.GetComponent("Animator").enabled=false;
	LeftCurs.GetComponent("Animator").enabled=false;
	RightCurs.GetComponent("Animator").enabled=false;
}