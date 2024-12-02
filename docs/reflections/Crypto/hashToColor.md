
```typescript
const PRESET_COLORS = [
	'magenta',
	'volcano',
	'orange',
	'gold',
	'lime',
	'green',
	'cyan',
	'blue',
	'geekblue',
	'purple',
];
const COLORS_COUNT = PRESET_COLORS.length;
function hashToColor(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		hash += str.charCodeAt(i);
	}

	return PRESET_COLORS[hash % COLORS_COUNT];
}
```