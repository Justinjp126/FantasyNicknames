from ctypes import addressof
from tkinter.font import names
from bs4 import BeautifulSoup
import requests
import re

# nickname variable links
j_taylor_source = requests.get(
    "https://www.sportskeeda.com/nfl/40-jonathan-taylor-fantasy-football-names").text
n_harris_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-najee-harris-fantasy-football-team-names').text
a_ekeler_source = requests.get(
    'https://friendsgroupname.com/austin-ekeler-fantasy-names/').text
c_kupp_source = requests.get(
    'https://www.ranker.com/list/best-cooper-kupp-fantasy-name/pedro-cerrano').text
d_henry_source = requests.get(
    'https://www.ranker.com/list/best-derrick-henry-fantasy-name/pedro-cerrano').text
c_mccaffrey_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-christian-mccaffrey-fantasy-football-team').text
a_kamara_source = requests.get(
    'https://www.sportskeeda.com/nfl/40-alvin-kamara-fantasy-football-team-name-2022').text
d_cook_source = requests.get(
    'https://www.sportsfeelgoodstories.com/dalvin-cook-fantasy-team-names/').text
j_jefferson_source = requests.get(
    'https://www.ranker.com/list/best-justin-jefferson-team-name/pedro-cerrano').text
j_chase_source = requests.get(
    'https://www.ranker.com/list/best-jamarr-chase-fantasy-name/pedro-cerrano').text
c_lamb_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/wide-receiver-names/ceedee-lamb').text
s_diggs_source = requests.get(
    'https://www.ranker.com/list/best-stefon-diggs-fantasy-name/pedro-cerrano').text
d_adams_source = requests.get(
    'https://www.sportskeeda.com/nfl/30-best-davante-adams-fantasy-football-names-try-2022').text
d_swift_source = requests.get(
    'https://www.ranker.com/list/best-dandre-swift-fantasy-name/pedro-cerrano').text
t_kelce_source = requests.get(
    'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/tight-end-names/travis-kelce').text
# m_andrews_source = requests.get(
#     'https://www.sportskeeda.com/nfl/news-mark-andrews-fantasy-football-team-names').text
# j_mixon_source = requests.get(
#     'https://www.ranker.com/list/best-joe-mixon-fantasy-name/pedro-cerrano').text
# m_evans_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/mike-evans-fantasy-football-team-names-01ga9p6ym5j5').text
# t_hill_source = requests.get(
#     'https://www.sportskeeda.com/nfl/40-tyreek-hill-fantasy-football-team-names').text
# d_samuel_source = requests.get(
#     'https://www.sportskeeda.com/nfl/deebo-samuel-fantasy-football-team-names').text
# k_allen_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/keenan-allen-fantasy-football-team-names-2021-season-01fepgksvcmf').text
# l_fournette_source = requests.get(
#     'https://flurrysports.org/leonard-fournette-fantasy-football-team-names/').text
# j_williams_source = requests.get(
#     'https://flurrysports.org/javonte-williams-fantasy-football-team-names/').text
# m_williams_source = requests.get(
#     'https://www.sportsfeelgoodstories.com/chargers-fantasy-football-names/').text
# t_mclaurin_source = requests.get(
#     'https://www.ranker.com/list/best-terry-mclaurin-fantasy-name/pedro-cerrano').text
# d_johnson_source = requests.get(
#     'https://www.drodd.com/fantasyteamname/diontae-johnson-fantasy-names.html').text
# a_jones_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/aaron-jones-fantasy-football-team-names-2021-season-01fe42v38eft').text
# e_elliott_source = requests.get(
#     'https://flurrysports.org/ezekiel-elliott-fantasy-football-team-names/').text
# k_pitts_source = requests.get(
#     'https://flurrysports.org/kyle-pitts-fantasy-football-team-names/').text
# a_brown_source = requests.get(
#     'https://flurrysports.org/a-j-brown-fantasy-football-team-names/').text
# c_akers_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/cam-akers-fantasy-football-team-names-01ga9qd3frr0').text
# j_conner_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/james-conner-fantasy-football-team-names-01ga9pxxc3d5').text
# s_barkley_source = requests.get(
#     'https://www.ranker.com/list/best-saquon-barkley-fantasy-name/pedro-cerrano').text
# j_allen_source = requests.get(
#     'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/quarterback-names/josh-allen').text
# n_chubb_source = requests.get(
#     'https://www.sportskeeda.com/nfl/news-40-nick-chubb-fantasy-football-team-names-2022').text
# d_metcalf_source = requests.get(
#     'https://www.sportskeeda.com/nfl/40-dk-metcalf-fantasy-football-team-names').text
# d_moore_source = requests.get(
#     'https://www.drodd.com/fantasyteamname/dj-moore-fantasy-names.html').text
# j_jacobs_source = requests.get(
#     'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/running-back-names/josh-jacobs').text
# c_helaire_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/clyde-edwards-helaire-fantasy-football-team-names-2021-season-01fepjgt4qvd').text
# d_waller_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/darren-waller-fantasy-football-team-names-2021-season-01fep5s798cc').text
# g_kittle_source = requests.get(
#     'https://www.ranker.com/list/best-george-kittle-fantasy-name/pedro-cerrano').text
# c_patterson_source = requests.get(
#     'https://www.fanduel.com/theduel/posts/cordarrelle-patterson-fantasy-football-team-names-2021-waiver-wire-01fg521qbqev').text
# d_mooney_source = requests.get(
#     'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/nfl-teams/chicago-bears').text
# t_higgins_source = requests.get(
#     'https://www.sportskeeda.com/nfl/40-tee-higgins-fantasy-football-team-names').text
# e_mitchell_source = requests.get(
#     'https://flurrysports.org/elijah-mitchell-fantasy-football-team-names/').text
# t_jr_source = requests.get(
#     'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/nfl-teams/jacksonville-jaguars').text
# j_herbert_source = requests.get(
#     'https://www.cheatsheetwarroom.com/blog/fantasy-football/names/quarterback-names/justin-hebert').text
# p_mahomes_source = requests.get(
#     'https://www.ranker.com/list/best-patrick-mahomes-fantasy-name/pedro-cerrano').text
# j_waddle_source = requests.get(
#     'https://flurrysports.org/jaylen-waddle-fantasy-football-team-names/').text
namesDic = {}  # dictionary with name as key, array of nicknames as value

'''
Function to add values to 
dictionary when website is 
ranker
'''


def addRankerPlayer(source, playerName):
    soup = BeautifulSoup(source, 'lxml')
    namesDic.update({playerName: []})
    nicknameTags = soup.find_all("h2", class_="listItem_name__Qq_Y8")
    for nicknames in nicknameTags:
        nickname = nicknames.text
        namesDic[playerName].append(nickname)


'''
Function to add values to 
dictionary when website is 
Sportkeeda
'''


def addSportkeedaPlayer(source, playerName):
    soup = BeautifulSoup(source, 'lxml')
    namesDic.update({playerName: []})
    nicknameTags = soup.find_all('li', class_=None, id=None)
    for nicknames in nicknameTags:
        nickname = nicknames.text
        namesDic[playerName].append(nickname)


'''
Function to add values to 
dictionary when website is 
cheat sheet
'''


def addCheatSheetPlayer(source, playerName):
    soup = BeautifulSoup(source, 'lxml')
    namesDic.update({playerName: []})
    nicknameTags = soup.find_all("span", class_="auton")
    for nicknames in nicknameTags:
        nickname = nicknames.text
        namesDic[playerName].append(nickname)


'''
Function to group players whose nicknames
comes from websites that are only used once
'''


def addOtherPlayers():
    # AE
    soup = BeautifulSoup(a_ekeler_source, 'lxml')
    namesDic.update({'Austin Ekeler': []})
    nicknameTags = soup.find_all('li', class_=None, id=None)
    for index, nicknames in enumerate(nicknameTags):
        if (index < 26):
            nickname = nicknames.text
            namesDic['Austin Ekeler'].append(nickname)

    # DC
    soup = BeautifulSoup(d_cook_source, 'lxml')
    namesDic.update({'Dalvin Cook': []})
    nicknameTags = soup.find_all('strong', class_=None, id=None)
    for index, nicknames in enumerate(nicknameTags):
        if (index < 23):
            nickname = nicknames.text
            # find index of parenthesis and slice to end
            nickname = nickname[nickname.index(')') + 1:]
            nickname = nickname.strip()
            if (nickname[-1] == "."):
                nickname = nickname[:-1]  # remove period if present
            namesDic["Dalvin Cook"].append(nickname)


def main():
    addSportkeedaPlayer(j_taylor_source, "Johnathan Taylor")
    addSportkeedaPlayer(n_harris_source, "Najee Harris")
    addRankerPlayer(c_kupp_source, "Cooper Kupp")
    addRankerPlayer(d_henry_source, "Derrick Henry")
    addSportkeedaPlayer(c_mccaffrey_source, "Christian McCaffrey")
    addSportkeedaPlayer(a_kamara_source, "Alvin Kamara")
    addRankerPlayer(j_chase_source, "Ja'Marr Chase")
    addCheatSheetPlayer(c_lamb_source, "CeeDee Lamb")
    addRankerPlayer(s_diggs_source, "Stefon Diggs")
    addSportkeedaPlayer(d_adams_source, "Davante Adams")
    addRankerPlayer(d_swift_source, "D'Andre Swift")
    addCheatSheetPlayer(t_kelce_source, "Travis Kelce")
    addOtherPlayers()


main()
print(namesDic["Travis Kelce"])
