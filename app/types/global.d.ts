export {}
	
declare global {
		interface Project {
		id: string
		type: Array<string>
		src: string
		slides: string[]
		video: { url: string; id: string; width: string; height: string }
		title: string
		titlelink?: string
		clickable: boolean
		date: string
		client: string
		brief: string
		projdesc: string
		skills: { [key: string]: any[] }
	}
}
