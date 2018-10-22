export function fileTypeToTag(files){
		var tags = []
		files.forEach(fileType => {
			var type = fileType.split("/")[1]
			var delim = "x-"
			if (type.indexOf(delim) ==  0){
				type = type.split("x-")[1]
			}
			var idx = tags.indexOf(type)
			if(idx == -1){
				tags.push(type)
			}
		})
		return tags
}