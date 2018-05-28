using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GlobalAmmo : MonoBehaviour {
	public static int CurrentAmmo = 0;
	public int InternalAmmo;
	public GameObject AmmoDisplay;

	public static int LoadedAmmo;
	public int InternalLoaded;
	public GameObject LoadedDisplay;

	void Update () {
		InternalAmmo = CurrentAmmo;
		InternalLoaded = LoadedAmmo;

		LoadedDisplay.GetComponent<Text> ().text = "" + InternalLoaded;
		AmmoDisplay.GetComponent<Text>().text = "" + InternalAmmo;
	}
}
