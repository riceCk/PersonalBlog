<template>
  <div id="vuePen">
    <article class="intro">
      <h1> Concentration</h1>
      <p>Match all the squares before you run out of turns!</p>
      <template v-if="gameEnded">
        <p class="ending-message">
          <template v-if="winningGame">
            You Win!
          </template>
          <template v-else>
            You Lose!
          </template>
        </p>
      </template>
      <template v-else>
        <div class="progress-bar">
          <div v-bind:style="progressBarStyles" class="progress-bar__meter"></div>
        </div>
      </template>
    </article>
    <div class="board">
      <div class="board-item"
           v-for="(item, index) in boardItems"
           :class="{'board-item--selected' : item.selected, 'board-item--matched' : item.matched}"
           @click="clickBoardItem(item, index)"
      >
        <template v-if="!item.selected && !item.matched && !gameEnded">#</template>
        <template v-else>{{item.number}}</template>
      </div>
    </div>
    <button v-on:click="resetBoard()">
      Reset Game
    </button>
  </div>
</template>

<script>
  import util from '../../util/index'
  export default {
	data() {
	  return {
		finishedGame: false,
		boardItems: [],
		blocked: false,
		remainingGuesses: 0,
		limit: 30
	  }
	},
	computed: {
	  numberSelected() {
		return this.boardItems.reduce((total, item) => {
		  return total += (item.selected ? 1 : 0)
        }, 0);
	  },

	  numberMatched() {
		return this.boardItems.reduce((total, item) => total += (item.matched ? 1 : 0), 0);
	  },

	  progressBarStyles() {
		const invertedGuesses = this.limit - this.remainingGuesses,
			progress = this.limit - invertedGuesses,
			percentage = 100 - ((progress / this.limit) * 100);
		return {
		  width: `${percentage}%`
		};
	  },

	  gameEnded() {
		return this.remainingGuesses === 0;
	  },

	  winningGame() {
		return !this.boardItems.some(item => !item.matched)
	  }
	},

	watch: {
	  numberSelected() {
		if (this.numberSelected >= 2) {
		  this.blocked = true;
		  const selectedItems = this.boardItems.filter(item => item.selected === true),
			  matchingItems = selectedItems[0].number === selectedItems[1].number;
		  if (matchingItems) {
			this.boardItems.map(item => {
			  if (item.selected) {
				item.matched = true;
				item.selected = false;
			  }
			});
			this.blocked = false;
			this.remainingGuesses--;
		  } else {
			setTimeout(() => {
			  this.boardItems.map(item => item.selected = false);
			  this.blocked = false;
			  this.remainingGuesses--;
			}, 750);
		  }
		}
	  }
	},

	methods: {
	  generateBoardItems() {
        const randomNumber = () => Math.floor(Math.random() * Math.floor(50));
		let boardNumbers = [];

		while (boardNumbers.length < 36) {
		  const newNumber = randomNumber(),
			  alreadyUsed = boardNumbers.some(item => item.number === newNumber);
		  if (!alreadyUsed) {
			const newEntry = (id) => {
			  return {
				id: id,
				number: newNumber,
				selected: false,
				matched: false
			  }
			}

			boardNumbers.push(newEntry(boardNumbers.length));
			boardNumbers.push(newEntry(boardNumbers.length));
		  }
		}

		this.boardItems = util.shuffle(boardNumbers);
	  },

	  selectBoardItemAs(item, val) {
		if (!this.blocked && !this.gameEnded) {
		  this.boardItems.map(boardItem => {
			if (boardItem.id === item.id) {
			  boardItem.selected = val;
			}
		  });
		}
	  },

	  clickBoardItem(item) {
		const hiddenItem = !item.selected && !item.matched;

		this.selectBoardItemAs(item, true);
	  },

	  resetGuesses() {
		this.remainingGuesses = this.limit;
	  },

	  resetBoard() {
		this.generateBoardItems();
		this.resetGuesses();
	  }
	},

	beforeMount() {
	  this.generateBoardItems();
	  this.resetGuesses();
	}
  }
</script>

<style lang="scss">
  $box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  body {
    padding: 1rem;
  }

  .intro {
    min-height: 120px;
    margin-bottom: 1rem;

    text-align: center;
  }

  .ending-message {
    margin: 1rem 0;

    font-size: 1.25rem;
    font-weight: 700;
    font-style: italic;
    text-decoration: underline;
  }

  .board {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 0.5rem;
  }

  .board-item {
    display: flex;
    padding: 0.5rem;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 4rem;
    background-color: black;
    box-shadow: $box-shadow;
    cursor: pointer;
    transition: box-shadow 0.25s;
  }

  .board-item--selected,
  .board-item--matched {
    box-shadow: $box-shadow;
    cursor: default;
    transition: box-shadow 0.5s;
  }

  .board-item--selected {
    background-color: #060f94;
  }

  .board-item--matched {
    color: #111;

    background-color: #fee226;
  }

  .progress-bar {
    height: 1rem;

    border-radius: 0.5rem;
    border: 2px solid #111;
  }

  .progress-bar__meter {
    height: 100%;

    border-radius: 0.35rem;
    background-color: #e2252a;

    transition: width 0.25s;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    margin-top: 1rem;

    border-width: 0;
    box-shadow: $box-shadow;
    background-color: #82edfe;
    border-radius: 0.5rem;
  }

</style>
