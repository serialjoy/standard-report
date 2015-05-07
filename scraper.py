import requests
import random

urls = ['http://alba-iulia-ab.pe-harta.ro/',
 'http://arad-ar.pe-harta.ro/',
 'http://pitesti-ag.pe-harta.ro/',
 'http://bacau-bc.pe-harta.ro/',
 'http://oradea-bh.pe-harta.ro/',
 'http://bistrita-bn.pe-harta.ro/',
 'http://botosani-bt.pe-harta.ro/',
 'http://braila-br.pe-harta.ro/',
 'http://brasov-bv.pe-harta.ro/',
 'http://bucuresti-b.pe-harta.ro/',
 'http://buzau-bz.pe-harta.ro/',
 'http://calarasi-cl.pe-harta.ro/',
 'http://resita-cs.pe-harta.ro/',
 'http://cluj-napoca-cj.pe-harta.ro/',
 'http://constanta-ct.pe-harta.ro/',
 'http://sfantu-gheorghe-cv.pe-harta.ro/',
 'http://targoviste-db.pe-harta.ro/',
 'http://craiova-dj.pe-harta.ro/',
 'http://galati-gl.pe-harta.ro/',
 'http://giurgiu-gr.pe-harta.ro/',
 'http://targu-jiu-gj.pe-harta.ro/',
 'http://miercurea-ciuc-hr.pe-harta.ro/',
 'http://deva-hd.pe-harta.ro/',
 'http://slobozia-il.pe-harta.ro/',
 'http://iasi-is.pe-harta.ro/',
 'http://buftea-if.pe-harta.ro/',
 'http://baia-mare-mm.pe-harta.ro/',
 'http://drobeta-turnu-severin-mh.pe-harta.ro/',
 'http://targu-mures-ms.pe-harta.ro/',
 'http://piatra-neamt-nt.pe-harta.ro/',
 'http://slatina-ot.pe-harta.ro/',
 'http://ploiesti-ph.pe-harta.ro/',
 'http://zalau-sj.pe-harta.ro/',
 'http://satu-mare-sm.pe-harta.ro/',
 'http://sibiu-sb.pe-harta.ro/',
 'http://suceava-sv.pe-harta.ro/',
 'http://alexandria-tr.pe-harta.ro/',
 'http://timisoara-tm.pe-harta.ro/',
 'http://tulcea-tl.pe-harta.ro/',
 'http://ramnicu-valcea-vl.pe-harta.ro/',
 'http://vaslui-vs.pe-harta.ro/',
 'http://focsani-vn.pe-harta.ro/']

print "["
for url in urls:
    response = requests.get(url).content
    #BeautifulSoup(response, 'lxml')
    index = response.index('LatLng')
    index2 = response.index('(', index)
    index3 = response.index(')', index)
    lat,long = response[index2+1: index3].split(',')
    print "{lat: " + lat + ", lng:" + long + ", count: " + str(random.randint(0,100))+"},"
print "]"
