var GunShotSound : AudioSource;
var flash : GameObject;
public GameObject projectileToSpawn;
public Transform shotSpawnTransform;
public float fireRate = 0.5f;
public float projectileTimeToLive = 3f;
public float firstShotDelay = 0.0f;
private float nextShotTime = 0.0f;

function Start()
{
    nextShotTime = Time.time + firstShotDelay;
}

function Update () { 
	
	if(GlobalAmmo.LoadedAmmo >= 1){
		//Edit/ProjectSettings/Input
		if(Input.GetButtonDown("Fire1")) {
			
			GunShotSound.Play();
			flash.SetActive(true);
			MuzzleOff();
			GetComponent.<Animation>().Play("GunShot");
			GlobalAmmo.LoadedAmmo -= 1;
		}
	}

}

function Fire()
{
    if (Time.time > nextShotTime)
    {
        GameObject newProjectile = Instantiate(projectileToSpawn, shotSpawnTransform.position, shotSpawnTransform.rotation);
        Physics.IgnoreCollision(gameObject.GetComponent<Collider>(), newProjectile.GetComponent<Collider>());
        nextShotTime = Time.time + fireRate;
    }
}

function MuzzleOff(){
	yield WaitForSeconds(0.1);
	flash.SetActive(false);
}
