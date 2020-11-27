//! Ovaj dio ce nam sluziti za podesavanje parametara client id itd.

//todo KONFIGURACIONI DIO

class Github {
  constructor() {
    this.client_id = "bb17db3de25b8eb28e6f";
    this.client_secret = "49e335366f9673f637095cf7d4aaf923ea641708";
    this.repos_count = 10;
    this.repos_sort = "created: desc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    //? Da nismo definisali ovo kao objekat, onda bi koristili fabricki objekat zadat u API-ju
    return {
      profile,
      repos,
    }; //? zelimo da se vraca objekat
  }
}
