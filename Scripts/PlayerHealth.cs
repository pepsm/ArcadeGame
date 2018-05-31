using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class PlayerHealth : MonoBehaviour {
	public GameObject HealthDisplay;
	public GameObject Player;

	public static int ReduceHealth = 0;

	private int Health = 900;
	// Update is called once per frame
	void Update () {
		
		if (Health > 0) {
			Health -= ReduceHealth;
			HealthDisplay.GetComponent<Text>().text = "" + Health;
		}
	}
	public void restartCurrentScene(){
		int scene = SceneManager.GetActiveScene ().buildIndex;
		SceneManager.LoadScene (scene, LoadSceneMode.Single);
	}

}
