# creating a dictionary
music_playlist = {
    "Babysharkdance":{ "Artist":"Pinkfong Baby Shark - Kids' Songs & Stories","genre":"childrens song"}, 
    "despacito":{ "Artist":"Luis Fonsi","genre":"reggaeton"}, 
    "Johny Johny Yes Papa":{ "Artist":"LooLoo Kids - Nursery Rhymes and Children's Songs","genre":"childrens song"}, 
}

# printing the dictionary
print(music_playlist)

#def view_playlist():
#   for song in playlist:
#   print("song: {song}")
#   print("Artist: ", playlist[song]["Artist"]) 
#   print("Genre: ", playlist[song]["Genre"])
#
#view_playlist()

# add an item with "songtitle4" as key and "name and genre" as its value
def add_song():
    music_playlist["Bath Song"] = { "Artist":"Cocomelon - Nursery Rhymes","genre":"childrens song"}
    print(music_playlist)

def view_playlist():
    for song in music_playlist:
        print("song:")
        print("Artist: ", music_playlist[song]["Artist"]) 
        print("Genre: ", music_playlist[song]["genre"])
view_playlist()

# change the value of
def update_song():
    music_playlist ["genre"] = ["rock"]

print(music_playlist)

# delete item key, value
#def delete_song():
#    del music_playlist["despacito"]

song = input("Please Enter Your song: ")

artist = input("Please Enter the artist: ")

genre = input("Please Enter the song genre: ")
print("Song, artist and genre: ", song, artist, genre)

print(music_playlist)