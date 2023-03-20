const animation = "|/-\\|/-\\";

let delay = 100;

for (let char of animation) {
  setTimeout(() => {
    process.stdout.write("\r" + char + "   ");
  }, (delay += 200));
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1700);
