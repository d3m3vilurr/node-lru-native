{
  "targets": [
    {
      "target_name": "native",
      "sources": ["src/native.cc", "src/LRUCache.cc"],
      "cflags": ["-std=c++11", "-O2", "-Wno-cast-function-type"],
      "cflags_cc": ["-std=c++11", "-O2", "-Wno-cast-function-type"],
      "include_dirs" : [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
