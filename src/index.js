import { openDB } from "idb"

function test () {
	console.log(openDB)
	import('dayjs').then((dayjs) => {
		console.log(dayjs.format('YYYY-MM-DD'))
	})
}

export default test