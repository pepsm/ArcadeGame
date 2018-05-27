using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyScript : MonoBehaviour {
	public int EnemyHealth = 10;

	void DeductPoints (int DamageAmount) {
		EnemyHealth -= DamageAmount;
	}

	void Update(){
		if (EnemyHealth <= 0) {
			Destroy (gameObject);
		}
	}
}
