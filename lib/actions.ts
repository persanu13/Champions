import { Champion } from "./definition";

export async function fetchAllChampions(): Promise<Champion[] | null> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return Object.values(data.data); // Extragem doar datele despre campioni
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchChampion(name: string): Promise<Champion | null> {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.24.1/data/en_US/champion/${name}.json`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData = await response.json();
    const championData = jsonData.data[name]; // Extragem doar datele despre campion

    if (!championData) {
      throw new Error("Champion data not found");
    }

    return championData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
