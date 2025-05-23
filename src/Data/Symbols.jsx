import rarityHolo from '/src/Data/Rarity_Rare_Holo.png';
import rarityRare from '/src/Data/Rarity_Rare.png';
import rarityUncommon from '/src/Data/Rarity_Uncommon.png';
import rarityCommon from '/src/Data/Rarity_Common.png';


export const setSymbols = {
  'Base Set': (
    <img
      src='https://images.pokemontcg.io/base1/symbol.png'
      alt='base set symbol'
      style={{ height: '15px' }}
    />
  ),
  Jungle: (
    <img
      src='https://images.pokemontcg.io/base2/symbol.png'
      alt='jungle set symbol'
      style={{ height: '15px' }}
    />
  ),
  Fossil: (
    <img
      src='https://images.pokemontcg.io/base3/symbol.png'
      alt='fossil set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Base Set 2': (
    <img
      src='https://images.pokemontcg.io/base4/symbol.png'
      alt='base set 2 set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Team Rocket': (
    <img
      src='https://images.pokemontcg.io/base5/symbol.png'
      alt='team rocket set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Gym Heroes': (
    <img
      src='https://images.pokemontcg.io/gym1/symbol.png'
      alt='gym heroes set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Gym Challenge': (
    <img
      src='https://images.pokemontcg.io/gym2/symbol.png'
      alt='gym challenge set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Neo Genesis': (
    <img
      src='https://images.pokemontcg.io/neo1/symbol.png'
      alt='neo genesis set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Neo Discovery': (
    <img
      src='https://images.pokemontcg.io/neo2/symbol.png'
      alt='neo discovery set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Neo Revelations': (
    <img
      src='https://images.pokemontcg.io/neo3/symbol.png'
      alt='neo revelations set symbol'
      style={{ height: '15px' }}
    />
  ),
  'Neo Destiny': (
    <img
      src='https://images.pokemontcg.io/neo4/symbol.png'
      alt='neo destiny set symbol'
      style={{ height: '15px' }}
    />
  ),
};

export const raritySymbols = {
  secret: (
    <img
      src='https://archives.bulbagarden.net/media/upload/9/95/Rarity_Shining_Holo.png'
      alt='secret rare symbol'
    />
  ),
  holo: <img height="11px" width="21px" src={rarityHolo} alt='holo symbol' />,
  rare: <img height="12px" width="13px" src={rarityRare} alt='rare symbol' />,
  uncommon: <img height="12px" width="11px" src={rarityUncommon} alt='uncommon symbol' />,
  common: <img height="11px" width="11px" src={rarityCommon} alt='common symbol' />,
}