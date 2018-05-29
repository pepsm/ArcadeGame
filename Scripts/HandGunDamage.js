<<<<<<< HEAD
﻿var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;

function Update () {

if(GlobalAmmo.LoadedAmmo >= 1){

	if(Input.GetButtonDown("Fire1")) {

		var Shot : RaycastHit;
									//my position    //Next position	//TargetDistance
			if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)) {
				TargetDistance = Shot.distance;
					if (TargetDistance < AllowedRange) {
						Shot.transform.SendMessage("DeductPoints", DamageAmount);
					}
				}
			}
		}
	}
=======
﻿var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;

function Update () {

if(GlobalAmmo.LoadedAmmo >= 1){

	if(Input.GetButtonDown("Fire1")) {

		var Shot : RaycastHit;
									//my position    //Next position	//TargetDistance
			if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)) {
				TargetDistance = Shot.distance;
					if (TargetDistance < AllowedRange) {
						Shot.transform.SendMessage("DeductPoints", DamageAmount);
					}
				}
			}
		}
	}
>>>>>>> 416bb19edcc99a854f8e26b06ded8d914e8b3eae
