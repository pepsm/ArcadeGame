var AmmoSound : AudioSource;


function OnTriggerEnter (col : Collider) {
	AmmoSound.Play();
	if (GlobalAmmo.LoadedAmmo == 0) {
			GlobalAmmo.LoadedAmmo += 10;
			this.gameObject.SetActive(false);
		}
		else {
			GlobalAmmo.CurrentAmmo += 10;
			this.gameObject.SetActive(false);
		}
}