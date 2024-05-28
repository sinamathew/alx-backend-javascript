export default function taskBlock(trueOrFalse) {
  const task = trueOrFalse ? 'task1' : 'task2';
  const task2 = trueOrFalse ? 'task2' : 'task1';
  return [task, task2];
}
