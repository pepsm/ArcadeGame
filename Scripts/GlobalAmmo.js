import UnityEngine.UI;

static var CurrentAmmo : int;
var InternalAmmo : int;
var AmmoDisplay : GameObject;

static var LoadedAmmo : int;
var InternalLoaded : int;
var LoadedDisplay : GameObject;

function Update () {
	InternalAmmo = CurrentAmmo;
	InternalLoaded = LoadedAmmo;
	// Can't  be text = InternalAmmo
	AmmoDisplay.GetComponent.<Text>().text = "" + InternalAmmo;
	LoadedDisplay.GetComponent.<Text>().text = "" + InternalLoaded;
}
