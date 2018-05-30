
var TheDistance : float = PlayerCasting.DistanceFromTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;
var AmmoDisplay : GameObject;
var PickUpAudio : AudioSource;

function Update () {
	TheDistance = PlayerCasting.DistanceFromTarget;

}

function OnMouseOver () {
	if (TheDistance <= 3 ) {
		TextDisplay.GetComponent.<Text>().text = "Take M4A1 gun";
	}

	if (Input.GetButtonDown("Action")) {
		if (TheDistance <= 8 ) {
			TakeGun();
		}
	}
}

function OnMouseExit () {
	TextDisplay.GetComponent.<Text>().text = "";
}

function TakeGun () {
	PickUpAudio.Play();
	transform.position = Vector3(0, -1000, 0);
	FakeGun.SetActive(false);
	RealGun.SetActive(true);
	AmmoDisplay.SetActive(true);

}