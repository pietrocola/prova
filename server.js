"sezioneHome": {
      "queries": [

        {
          "collezione": "SoleOnLine5",
          "objQuery": {
            "select": "{\"uuid\":1,\"sezione\":1,\"sottosezione\":1,\"titolo\":1,\"autore\":1,\"sommario\":1,\"foto258x258\":1,\"testo\":1,\"river24.localData\":1}",
            "order": "[[\"river24.localData\",\"descending\"]]",
            "skip": 0,
            "limit": 5,
            "query": "{\"river24.localData\":{\"$lte\":ISODate(\"##:##:##T23:59:00.000Z\")}, \"sezione\": { \"$in\" :[\"Notizie\" ]},  \"sottosezione\": {\"$in\":[\"Attualita\",\"Politica\",\"Politica Economica\",\"Sport\"]}, \"tipo\": {\"$in\":[\"Articolo\"]}}",
            "template": "string"
            }
        },
        {
          "collezione": "BuongiornoSoleTMP",
          "objQuery": {
            "select": "{}",
            "order": "[[\"river24.localData\",\"descending\"]]",
            "skip": 0,
            "limit": 3,
            "query": "{ \"river24.localData\" : {\"$gte\": ISODate(\"##:##:##T00:00:00.000Z\"),        \"$lt\": ISODate(\"##:##:##T23:59:00.000Z\")    } }",
            "template": "string"
          }
        },
        {
          "collezione": "SoleOnLine5",
          "objQuery": {
            "select": "{\"uuid\":1,\"sezione\":1,\"sottosezione\":1,\"titolo\":1,\"autore\":1,\"sommario\":1,\"foto258x258\":1,\"testo\":1,\"river24.localData\":1}",
            "order": "[[\"river24.localData\",\"descending\"]]",
            "skip": 0,
            "limit": 1,
            "query": "{ \"sezione\": \"Tecnologie\", \"sottosezione\" : { \"$in\":[\"Innovazione\",\"App e Entertainment\"]} }",
            "template": "string"
          }
        },
        {
          "collezione": "QuotidianoFisco2014",
          "objQuery": {
            "select": "{}",
            "order": "[[\"river24.localData\", \"descending\"]]",
            "skip": 0,
            "limit": 3,
            "query": "{\"river24.localData\":{\"$lte\":ISODate(\"##:##:##T23:59:00.000Z\")}, \"sezione\": { \"$in\" :[\"Tributi-locali\" , \"Persone-fisiche\",\"Professione-e-studio\"]},\"tipo\":{ \"$in\" :[\"Articolo\"]}}",
            "template": "string"
          }
        },
        {
          "collezione": "SoleOnLine5",
          "objQuery": {
            "select": "{\"uuid\":1,\"sezione\":1,\"sottosezione\":1,\"titolo\":1,\"autore\":1,\"sommario\":1,\"foto258x258\":1,\"testo\":1,\"river24.localData\":1}",
            "order": "[[\"river24.localData\",\"descending\"]]",
            "skip": 0,
            "limit": 2,
              "query": "{\"river24.localData\":{\"$lte\":ISODate(\"##:##:##T23:59:00.000Z\")}, \"sezione\": { \"$in\" :[\"Mondo\" ]},  \"sottosezione\": {\"$in\":[\"Mondo24\",\"Macroeconomia\"]}, \"tipo\": {\"$in\":[\"Articolo\"]}}", 
            
            "template": "string"
          }
        }

      ]
    }