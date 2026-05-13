const useState = (name: string): readonly [string, () => void] => {
  return [name, () => console.log(name + 100)] as const;
};

const [names, useName] = useState("Gohan");
console.log(names);
useName();
