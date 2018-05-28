using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(AudioSource))]
public class GunShot : MonoBehaviour {
	void Update () {
		if (Input.GetButtonDown ("Fire1") && GlobalAmmo.LoadedAmmo > 0) {
		    AudioSource gunsound = GetComponent<AudioSource>();
			gunsound.Play();
			GetComponent<Animation>().Play("GunFire");
			GlobalAmmo.LoadedAmmo -= 1;
		}	
	}
}
