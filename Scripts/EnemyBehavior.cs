using UnityEngine;
using System.Collections;

public class EnemyBehavior : MonoBehaviour {

	public GameObject ThePlayer;
	public float TargetDistance;
	public float AllowedRange = 10;
	public GameObject TheEnemy;
	public float EnemySpeed = 0.2f;
	public int AttackTrigger;
	public RaycastHit Shot;

	public AudioSource EnemyAttackAudio;

	void Update() {
		transform.LookAt (ThePlayer.transform);
		if (Physics.Raycast (transform.position, transform.TransformDirection (Vector3.forward), out Shot)) {
			TargetDistance = Shot.distance;
			if (TargetDistance < AllowedRange) {
				EnemySpeed = 0.4f;
				if (AttackTrigger == 0) {
					TheEnemy.GetComponent<Animation> ().Play ("creature1walkforward");
					transform.position = Vector3.MoveTowards (transform.position, ThePlayer.transform.position, EnemySpeed);
				}
			} else {
				EnemySpeed = 0;
				TheEnemy.GetComponent<Animation> ().Play ("creature1Idle");
			}
		}

		if (AttackTrigger == 1) {
			EnemySpeed = 0;
			EnemyAttackAudio.Play ();
			TheEnemy.GetComponent<Animation> ().Play ("creature1Attack2");
		}
	}

	void OnTriggerEnter() {
		AttackTrigger = 1;
	}

	void OnTriggerExit() {
		AttackTrigger = 0;
	}

}