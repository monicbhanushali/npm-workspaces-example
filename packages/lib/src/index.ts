const FRUITS: string[] = [
  'Mango', 'Apple', 'Watermelon', 'Jackfruit', 'Banana',
  'Pineapple', 'Apricot', 'Green Apple', 'Peach', 'Fig'
]

export function getRandomFruit(): string {
  return FRUITS[Math.trunc(Math.random() * 10)]
}
