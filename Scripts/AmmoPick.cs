using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AmmoPick : MonoBehaviour {

	public AudioSource gunsound;
	public int AmmoAmount = 10;
	void OnTriggerEnter(Collider col){
		
		gunsound.Play();

		GlobalAmmo.CurrentAmmo += AmmoAmount;
		this.gameObject.SetActive (false);
	}
}
