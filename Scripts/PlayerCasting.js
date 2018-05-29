<<<<<<< HEAD
﻿static var DistanceFromTarget : float;

var ToTarget : float; //how far it is to the target


function Update () {
	var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			ToTarget = hit.distance;
			DistanceFromTarget = ToTarget;		
		}
=======
﻿static var DistanceFromTarget : float;

var ToTarget : float; //how far it is to the target


function Update () {
	var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			ToTarget = hit.distance;
			DistanceFromTarget = ToTarget;		
		}
>>>>>>> 416bb19edcc99a854f8e26b06ded8d914e8b3eae
}