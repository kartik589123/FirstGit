const posts = [
  { title: "one", body: "1" },
  { title: "two", body: "2" },
];

function createpost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}
const user = {
  username: "kartik",
  lastactivitytime: "18th April",
};

function updatelastactivitytime(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastactivitytime = new Date().getTime();
      resolve(user.lastactivitytime);
    }, 1000);
  });
}

Promise.all([
  createpost({ title: "4", body: "four" }),
  updatelastactivitytime(),
]).then((val) => console.log(val));
