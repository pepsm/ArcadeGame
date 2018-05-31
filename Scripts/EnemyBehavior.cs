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
	public int PlayerDamage = 20;

	void Update() {
		transform.LookAt (ThePlayer.transform);
		if (Physics.Raycast (transform.position, transform.TransformDirection (Vector3.forward), out Shot)) {
			TargetDistance = Shot.distance;
			if (TargetDistance < AllowedRange) {
				EnemySpeed = 0.4f;
				if (AttackTrigger == 0) {
					PlayerHealth.ReduceHealth = 0;
					TheEnemy.GetComponent<Animation> ().Play ("creature1walkforward");
					transform.position = Vector3.MoveTowards (transform.position, ThePlayer.transform.position, EnemySpeed);
				}
			} else {
				EnemySpeed = 0;
				TheEnemy.GetComponent<Animation> ().Play ("creature1Idle");
			}
		}

		if (AttackTrigger == 1) {
			AttackTrigger = 0;
			EnemySpeed = 0;
			EnemyAttackAudio.Play ();

			PlayerHealth.ReduceHealth = PlayerDamage;
			Animation anim = TheEnemy.GetComponent<Animation> ();
				anim.Play ("creature1Attack2");
			new WaitWhile (()=> anim.isPlaying);
		}
	}

	void OnTriggerEnter() {
		AttackTrigger = 1;
	}

	void OnTriggerExit() {
		AttackTrigger = 0;
	}

}