using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GlobalAmmo : MonoBehaviour {
	public static int CurrentAmmo = 0;
	public int InternalAmmo;
	public GameObject AmmoDisplay;

	void Update () {
		InternalAmmo = CurrentAmmo;
		AmmoDisplay.GetComponent<Text>().text = "" + InternalAmmo;
	}
}
