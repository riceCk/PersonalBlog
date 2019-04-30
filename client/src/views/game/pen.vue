<template>
  <div id="vuePen">
    <article class="intro">
      <h1>方块配对配</h1>
      <p>来吧!匹配所以方块</p>
      <p class="ending-message" v-if="gameEnded">
        {{winningGame ? 'You Win!' : 'You Lose!'}}
      </p>
      <div class="progress-bar">
        <div class="progress-bar__meter" :style="progressBarStyles"></div>
      </div>
    </article>
    <div class="board">
      <div class="board-item"
           v-for="(item, index) in boardItems"
           :key="index"
           :class="{'board-item--selected': item.selected, 'board-item--matched': item.matched}"
           @click = "clickBoardItem(item)"
      >
        {{!gameEnded && !item.selected && !item.matched ? '#' : item.number}}
      </div>
    </div>
    <button @click="resetBoard()">
      Reset Game
    </button>
  </div>
</template>

<script>
  import util from '../../util/index'
  export default {
    data () {
      return {
		boardItems: [], // 内容方块
		remainingGuesses: 0,
        limit: 30,
		blocked: false,
      }
    },
    beforeMount () {
      this.generateBoardItems();
      this.resetGuesses();
    },
    computed: {
	  // 判断网格单个样式
	  gameEnded () {
		return this.remainingGuesses === 0
	  },
      // 限制步数进度条样式
	  progressBarStyles () {
	    const invertedGuesses = this.limit - this.remainingGuesses;
	    const progress = this.limit - invertedGuesses;
	    const percentage = 100 - ((progress / this.limit) * 100);
	    return {
	      width: `${percentage}px`
        }
      },
	  numberSelected () {
	    return this.boardItems.reduce((total, item) => {
          total += (item.selected ? 1 : 0)
          return total
        }, 0)
      },
	  winningGame() {
		return !this.boardItems.some(item => !item.matched)
	  }
    },
    methods: {
      // 初始化网格数据
	  generateBoardItems () {
        const randomNumber = () => Math.floor(Math.random() * Math.floor(50));
        let boarNumbers = [];
        while (boarNumbers.length < 36) {
          const newNumber = randomNumber(),
                alreadyUsed = boarNumbers.some(item => item.number === newNumber);
          if (!alreadyUsed) {
            const newEntry = (id) => {
              return {
                id: id,
                number: newNumber,
                selected: false,
                matched: false
              }
            }
			boarNumbers.push(newEntry(boarNumbers.length));
			boarNumbers.push(newEntry(boarNumbers.length));
          }
        }
		console.log(boarNumbers, '有序生成单位格中的数据')
        this.boardItems = util.shuffle(boarNumbers)
        console.log(boarNumbers, '打乱生成单位格中的数据')
      },
	  resetGuesses () {
	    this.remainingGuesses = this.limit
      },
      // 重置场景
	  resetBoard () {
		this.generateBoardItems();
		this.resetGuesses();
      },
      // 点击单个网格事件
	  clickBoardItem(item) {
		if (!this.blocked && !this.gameEnded) {
          this.boardItems.map(boardItems => {
            if (boardItems.id === item.id) {
              boardItems.selected = true;
            }
          })
		}
      },
    },
    watch: {
	  numberSelected () {
	    if (this.numberSelected >= 2) {
	      this.blocked = true;
	      const selectedItems = this.boardItems.filter(item => item.selected === true);
	      const matchingItems = selectedItems[0].number === selectedItems[1].number;
	      if (matchingItems) {
            this.boardItems.map(item => {
              if (item.selected) {
                item.matched = true;
                item.selected = false
              }
            });
            this.blocked = false;
            this.remainingGuesses--;
          } else {
	        setTimeout(() => {
	          this.boardItems.map(item => item.selected = false);
	          this.blocked = false;
	          this.remainingGuesses --;
            }, 750)
          }

        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  $box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
  #vuePen {
    padding: 1rem;
  }
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 120px;
    margin-bottom: 1rem;
    text-align: center;
    .ending-message {
      margin: 1rem 0;
      font-size: 1.25rem;
      font-weight: 700;
      font-style: italic;
      text-decoration: underline
    }
    .progress-bar {
      height: 1rem;
      border-radius: .5rem;
      border: 2px solid #111;
      .progress-bar__meter {
        height: 100%;
        width: 0%;
        border-radius: .35rem;
        background-color: #e2252a;
      }
    }
  }

  .board {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: .5rem;
    .board-item {
      display: flex;
      padding: .5rem;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 4rem;
      background-color: black;
      box-shadow: $box-shadow;
      cursor: pointer;
      transition: box-shadow .25s;
      &.board-item--selected,
      &.board-item--matched {
        box-shadow: $box-shadow;
        cursor: default;
        transition: box-shadow 0.5s;
      }
      &.board-item--selected {
        background-color: #060f94;
      }
      &.board-item--matched {
        color: #111;
        background-color: #fee226;
      }
    }

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
  @media screen and (max-width: 640px) {
    .board .board-item.board-item--selected {
      font-size: 2rem;
    }
  }
</style>
