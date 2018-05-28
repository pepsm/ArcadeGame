using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AmmoPick : MonoBehaviour {

	public AudioSource gunsound;
	public int AmmoAmount = 10;
	void OnTriggerEnter(Collider col){
		
		gunsound.Play();
		if (GlobalAmmo.LoadedAmmo == 0) {
			GlobalAmmo.LoadedAmmo += AmmoAmount;
			this.gameObject.SetActive (false);
		} else {
			GlobalAmmo.CurrentAmmo += AmmoAmount;
			this.gameObject.SetActive (false);
		}
	}
}
