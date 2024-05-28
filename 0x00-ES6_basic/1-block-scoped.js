export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (arguments.length > 0) {
    task = trueOrFalse ? true : false;
    task2 = trueOrFalse ? false : true;
  }

  return [task, task2];
}

