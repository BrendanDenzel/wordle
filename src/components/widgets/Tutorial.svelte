<script lang="ts">
	import { COLS, ROWS } from "../../utils";

	import { Tile } from "../board";
	export let visible: boolean;
</script>

<h3>how to play</h3>
<div>Guess the <strong>WORDLE</strong> in {ROWS} tries.</div>
<div>Each guess must be a valid {COLS} numbers. Hit the enter button to submit.</div>
<div>
	After each guess, the color of the tiles will change to show how close your guess was to the
	word.
</div>
<div class:complete={visible} class="examples">
	<div><strong>Examples</strong></div>
	<div class="row">
		<Tile value="1" state="🟩" />
		<Tile value="2" state="🔳" />
		<Tile value="3" state="🔳" />
		<Tile value="4" state="🔳" />
		<Tile value="5" state="🔳" />
	</div>
	<div>The number <strong>W</strong> is in the word and in the correct spot.</div>
	<div class="row">
		<Tile value="6" state="🔳" />
		<Tile value="7" state="🟨" />
		<Tile value="8" state="🔳" />
		<Tile value="9" state="🔳" />
		<Tile value="0" state="🔳" />
	</div>
	<div>The number <strong>I</strong> is in the word but in the wrong spot.</div>
	<div class="row">
		<Tile value="5" state="🔳" />
		<Tile value="8" state="🔳" />
		<Tile value="3" state="🔳" />
		<Tile value="4" state="⬛" />
		<Tile value="0" state="🔳" />
	</div>
	<div>The number <strong>U</strong> is not in the word in any spot.</div>
</div>
<div>
	This is a recreation of the original <a
		href="https://dduarte.github.io/numberle/"
		target="_blank">Numberle</a
	>
	by Dduarte with additional modes and features. Written with Svelte, in Typescript by
	<a href="https://github.com/Brendandenzel" target="_blank">Brendan Denzel</a>.
	<br />
	Open the settings menu to see some of the additional features.
</div>

<style lang="scss">
	div {
		margin: 14px 0;
	}
	.examples {
		border-top: 1px solid var(--border-primary);
		border-bottom: 1px solid var(--border-primary);
		:global(.row > *) {
			height: 100%;
			aspect-ratio: 1;
		}
		&:not(.complete) :global(.row .back) {
			transition-delay: 0.3s;
		}
	}
	.row {
		height: 40px;
		display: flex;
		gap: 4px;
	}
</style>
