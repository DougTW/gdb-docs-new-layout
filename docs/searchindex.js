Search.setIndex({"docnames": ["dbex/debug-linux-ex", "dbex/debug-linux-ex-lt", "dbex/debug-windows-ex", "dbex/index", "gdb-ug/index", "index", "overview/debug-cpu-gpu-major-diffs", "overview/index", "overview/overview", "overview/overview-part-a", "refs/blank", "refs/gdb-oneapi-faq", "refs/known-issues", "refs/release-notes", "refs/troubleshooting", "videos/index"], "filenames": ["dbex/debug-linux-ex.rst", "dbex/debug-linux-ex-lt.rst", "dbex/debug-windows-ex.rst", "dbex/index.rst", "gdb-ug/index.rst", "index.rst", "overview/debug-cpu-gpu-major-diffs.rst", "overview/index.rst", "overview/overview.rst", "overview/overview-part-a.rst", "refs/blank.rst", "refs/gdb-oneapi-faq.rst", "refs/known-issues.rst", "refs/release-notes.rst", "refs/troubleshooting.rst", "videos/index.rst"], "titles": ["Debugging Linux Applications with GDB", "Debugging Linux Applications with GDB", "Debugging Windows Applications with GDB", "Debug Examples", "User\u2019s Guide", "Documentation", "Debugging a Kernel on CPU and GPU: Major Differences", "What is Intel\u00ae Distribution for GDB*?", "Intel\u00ae Distribution for GDB*", "Intel\u00ae Distribution for GDB*", ".", "FAQs for GDB*", "Known Issues", "Release Notes", "Troubleshooting", "Videos"], "terms": {"cpu": [0, 1, 2, 4, 7, 8, 9, 13], "us": [0, 1, 4, 6, 13, 14], "simpl": [0, 1, 11], "sycl": [0, 1, 2, 13, 14], "name": [0, 1, 11], "arrai": [0, 1, 2, 7, 8, 9, 11], "transform": [0, 1, 2, 7, 8, 9, 11], "perform": [0, 1, 11], "basic": [0, 1, 2, 11, 13, 14], "oper": [0, 1, 11], "break": [0, 1, 6, 11], "run": [0, 1, 7, 8, 9, 13, 14], "print": [0, 1, 6, 7, 8, 9, 11, 13, 14], "continu": [0, 1, 7, 8, 9, 11, 14], "info": [0, 1, 6, 7, 8, 9, 11, 13, 14], "next": [0, 1, 6, 7, 8, 9, 11, 12], "The": [0, 1, 6, 7, 8, 9, 11, 12, 13, 14], "being": [0, 1, 7, 8, 9, 11, 12], "i": [0, 1, 5, 6, 8, 9, 12, 13, 14], "limit": [0, 1, 7, 8, 9, 11], "multipl": [0, 1, 6, 7, 8, 9, 13, 15], "thread": [0, 1, 6, 11, 12, 13, 14], "set": [0, 1, 7, 8, 9, 11, 13, 14], "oneapi_device_selector": [0, 1, 11], "environ": [0, 1, 7, 8, 9, 11], "variabl": [0, 1, 6, 7, 8, 9, 11, 13], "gpu": [0, 1, 2, 4, 12, 13, 14, 15], "disassembl": [0, 1, 6, 7, 8, 9, 11, 13, 14], "thi": [0, 1, 2, 7, 8, 9, 11, 12, 13, 14], "tutori": [0, 1, 7, 8, 9, 13, 15], "describ": [0, 1, 2, 7, 8, 9, 11], "how": [0, 1, 13], "interact": [0, 1, 11], "simd": [0, 1, 6, 11, 12, 13, 14], "lane": [0, 1, 6, 11, 12, 13], "addit": [0, 1, 7, 8, 9, 11], "element": [0, 1, 6, 7, 8, 9, 11, 14], "instruct": [0, 1, 6, 7, 8, 9, 11, 13], "level_zero": [0, 1, 11], "an": [0, 1, 6, 12, 13, 14], "fpga": [0, 1, 7, 8, 9, 11, 13], "emul": [0, 1, 7, 8, 9, 11, 13], "behav": [0, 1, 6], "similarli": [0, 1, 7, 8, 9], "devic": [0, 1, 6, 7, 8, 9, 13, 14, 15], "make": [0, 1, 7, 8, 9, 14], "sure": [0, 1, 11, 14], "you": [0, 1, 3, 6, 7, 8, 9, 11, 12, 13, 14], "complet": [0, 1, 11, 12], "necessari": [0, 1], "setup": [0, 1, 11], "step": [0, 1, 6, 11, 12, 13, 14], "get": [0, 1, 5, 7, 8, 9, 13], "start": [0, 1, 5, 7, 8, 9, 12, 13, 14], "guid": [0, 1, 5, 6], "proce": [0, 1], "opencl": [0, 1, 11], "2023": [0, 1, 11], "0": [0, 1, 11, 14], "releas": [0, 1, 5, 7, 8, 9, 14], "oneapi": [0, 1, 4, 13, 14], "support": [0, 1, 6, 7, 8, 9, 11, 13, 14], "For": [0, 1, 7, 8, 9, 11, 14], "earlier": [0, 1], "version": [0, 1, 5, 11, 13], "2022": [0, 1], "x": [0, 1, 7, 8, 9, 11], "see": [0, 1, 7, 8, 9, 11, 13, 14], "option": [0, 1, 6, 7, 8, 9, 11, 13, 15], "section": [0, 1, 11], "ha": [0, 1, 6, 11, 13], "some": [0, 1, 3, 7, 8, 9, 11, 14], "auto": [0, 1, 11, 13], "attach": [0, 1, 7, 8, 9, 11, 13], "reduc": [0, 1], "overhead": [0, 1], "pretti": [0, 1, 11], "prettifi": [0, 1, 11], "frame": [0, 1, 7, 8, 9, 11], "more": [0, 1, 6, 11, 13, 14], "live": [0, 1, 11], "debugg": [0, 1, 6, 7, 8, 9, 11, 12, 13, 14], "ar": [0, 1, 3, 6, 7, 8, 9, 13, 14], "alreadi": [0, 1, 11], "mai": [0, 1, 7, 8, 9, 11, 12, 13, 14], "workload": [0, 1, 11, 12], "show": [0, 1, 7, 8, 9, 11, 13], "hang": [0, 1], "like": [0, 1, 7, 8, 9, 11], "behavior": [0, 1, 6, 7, 8, 9], "deadlock": [0, 1], "infinit": [0, 1], "loop": [0, 1, 14], "etc": [0, 1], "exampl": [2, 6, 7, 8, 9, 11, 14], "scenario": [2, 3, 11, 13], "sampl": [2, 7, 8, 9, 11], "app": [2, 15], "kernel": [2, 4, 7, 8, 9, 11, 12, 13], "offload": [2, 7, 8, 9, 11, 13, 14], "program": [2, 4, 6, 7, 8, 9, 11, 13], "linux": [3, 5, 7, 8, 9, 15], "gdb": [3, 4, 6, 13, 15], "window": [3, 5, 7, 8, 9], "after": [3, 11], "ve": 3, "instal": [3, 11, 13], "configur": [3, 7, 8, 9], "intel": [3, 4, 5, 6, 13, 15], "distribut": [3, 5, 6, 13, 15], "here": [3, 7, 8, 9, 11, 13, 14], "If": [3, 7, 8, 9, 11, 12, 13, 14], "re": 3, "applic": [3, 5, 7, 8, 9, 13, 14], "debug": [4, 5, 12, 13, 14, 15], "major": [4, 7, 8, 9], "differ": [4, 7, 8, 9, 13], "uniqu": [4, 11], "featur": [4, 7, 8, 9], "what": 5, "user": [5, 6, 7, 8, 9, 14], "": [5, 7, 8, 9, 11], "video": [5, 11], "multi": [5, 13, 14, 15], "page": [5, 13], "html": [5, 7, 8, 9, 15], "singl": [5, 6, 7, 8, 9, 11, 14], "900": 5, "pdf": [5, 11], "sheet": [5, 7, 8, 9, 11, 13], "faq": 5, "known": [5, 7, 8, 9], "issu": [5, 11, 14], "note": [5, 7, 8, 9], "troubleshoot": 5, "command": [6, 7, 8, 9, 11, 12, 13], "veri": [6, 11], "close": 6, "standard": [6, 11], "experi": [6, 7, 8, 9], "almost": 6, "same": [6, 7, 8, 9, 11, 12, 13], "howev": [6, 7, 8, 9, 11], "come": 6, "from": [6, 7, 8, 9, 11, 14], "architectur": [6, 13], "In": [6, 7, 8, 9, 11, 14], "comparison": 6, "few": 6, "aspect": 6, "descript": 6, "data": [6, 11], "when": [6, 7, 8, 9, 11, 13, 14], "code": [6, 12, 13, 14], "vector": 6, "process": [6, 7, 8, 9, 11, 13, 14], "parallel": [6, 11, 14], "logic": 6, "unit": 6, "execut": [6, 11, 12, 13], "access": [6, 11, 14], "within": [6, 7, 8, 9, 11, 12], "doe": [6, 11], "even": 6, "your": [6, 7, 8, 9, 11, 14], "cannot": [6, 7, 8, 9, 11], "switch": [6, 7, 8, 9, 12, 13], "context": [6, 7, 8, 9, 13], "non": [6, 7, 8, 9, 13], "default": [6, 7, 8, 9, 13, 14], "can": [6, 7, 8, 9, 12, 13, 14], "particular": 6, "dure": [6, 7, 8, 9, 11, 14], "compil": [6, 7, 8, 9, 11, 13, 14], "mode": [6, 7, 8, 9, 11, 13], "most": [6, 11], "have": [6, 7, 8, 9, 11, 14], "8": [6, 11, 14], "16": [6, 11], "e": [6, 12, 13, 14], "channel": 6, "To": [6, 7, 8, 9, 11, 13, 14], "refer": [6, 7, 8, 9, 11, 13, 14], "identifi": 6, "format": [6, 7, 8, 9], "id": [6, 7, 8, 9, 11, 14], "learn": [6, 13], "about": [6, 7, 8, 9, 13], "chapter": 6, "4": [6, 7, 8, 9, 11, 14], "10": [6, 14], "follow": [6, 7, 8, 9, 11, 13, 14], "modif": 6, "comment": [6, 12], "current": [6, 7, 8, 9, 12, 13, 14, 15], "function": [6, 7, 8, 9, 13, 14], "gen": 6, "regist": [6, 7, 8, 9, 13], "shown": 6, "n": [6, 14], "A": [6, 11, 13, 14], "stepi": 6, "sourc": [6, 7, 8, 9, 11, 12, 13, 14], "line": [6, 7, 8, 9, 11, 12, 13, 14], "call": [6, 7, 8, 9, 13], "machin": [6, 7, 8, 9, 13], "over": [6, 7, 8, 9, 14], "occur": 6, "lane0": 6, "specifi": 6, "2": [6, 7, 8, 9, 11, 14], "5": [6, 7, 8, 9, 14], "6": [6, 7, 8, 9, 14], "1": [6, 7, 8, 9, 11, 14], "appli": 6, "3": [6, 7, 8, 9, 11, 14], "valu": [6, 7, 8, 9, 13], "each": 6, "activ": [6, 7, 8, 9, 12, 13], "inspect": [6, 7, 8, 9, 13, 14], "displai": [6, 7, 8, 9, 11, 13], "inform": [6, 13, 14], "includ": [6, 7, 8, 9, 11, 13, 14], "stop": [6, 7, 8, 9, 12, 13], "filter": 6, "out": 6, "unavail": 6, "avail": [6, 7, 8, 9, 11, 13, 14], "new": [6, 11, 13], "list": [6, 7, 8, 9, 11, 13], "due": 6, "breakpoint": [6, 12, 13], "With": [6, 7, 8, 9], "modifi": [6, 7, 8, 9, 14], "action": 6, "all": [6, 7, 8, 9, 11, 13], "match": [6, 11], "condit": 6, "end": [6, 11, 14], "creat": [6, 7, 8, 9, 11, 13], "special": 6, "inferior": [6, 13], "56": 6, "trigger": 6, "onli": [6, 7, 8, 9, 11, 13, 14], "allow": [7, 8, 9, 13], "state": [7, 8, 9], "both": [7, 8, 9, 11, 13], "host": [7, 8, 9, 11, 12, 13], "part": [7, 8, 9, 11, 13], "seamlessli": [7, 8, 9], "session": [7, 8, 9, 11, 13, 14], "tool": [7, 8, 9, 11], "automat": [7, 8, 9, 11, 13], "listen": [7, 8, 9], "event": [7, 8, 9, 13], "detect": [7, 8, 9, 13], "jit": [7, 8, 9, 13, 15], "dynam": [7, 8, 9, 13], "load": [7, 8, 9, 13], "defin": [7, 8, 9, 12, 13, 14], "insid": [7, 8, 9, 11, 12, 13, 14], "outsid": [7, 8, 9, 13], "halt": [7, 8, 9, 13], "per": [7, 8, 9, 13], "evalu": [7, 8, 9, 13, 14], "express": [7, 8, 9, 13, 14], "chang": [7, 8, 9], "navig": [7, 8, 9, 13], "stack": [7, 8, 9, 13], "level": [7, 8, 9, 11, 13], "record": [7, 8, 9, 13], "processor": [7, 8, 9, 13], "trace": [7, 8, 9, 13], "link": [7, 8, 9, 11], "full": [7, 8, 9], "document": [7, 8, 9, 11, 14], "extens": [7, 8, 9, 11, 13], "briefli": [7, 8, 9], "sinc": [7, 8, 9], "slightli": [7, 8, 9], "might": [7, 8, 9, 11, 12], "unfamiliar": [7, 8, 9], "output": [7, 8, 9, 11, 14], "those": [7, 8, 9], "summar": [7, 8, 9], "o": [7, 8, 9, 11, 14], "where": [7, 8, 9], "we": [7, 8, 9], "local": [7, 8, 9, 11, 13], "again": [7, 8, 9], "As": [7, 8, 9, 14], "normal": [7, 8, 9, 11], "cmd": [7, 8, 9], "help": [7, 8, 9, 11], "read": [7, 8, 9, 11, 13], "text": [7, 8, 9], "usag": [7, 8, 9], "given": [7, 8, 9, 11], "space": [7, 8, 9], "separ": [7, 8, 9], "otherwis": [7, 8, 9, 11], "gid": [7, 8, 9], "global": [7, 8, 9, 13], "locat": [7, 8, 9, 12], "also": [7, 8, 9, 11, 12, 13], "abov": [7, 8, 9], "via": [7, 8, 9, 14], "target": [7, 8, 9, 11, 13], "omit": [7, 8, 9, 13, 14], "1073741824": [7, 8, 9], "cpp": [7, 8, 9, 14], "61": [7, 8, 9], "7": [7, 8, 9, 14], "1073741888": [7, 8, 9], "1073742080": [7, 8, 9], "inferior_numb": [7, 8, 9], "thread_numb": [7, 8, 9], "so": [7, 8, 9, 14], "terminologi": [7, 8, 9], "typic": [7, 8, 9, 11], "two": [7, 8, 9, 11], "one": [7, 8, 9, 11, 14], "nativ": [7, 8, 9, 11, 13], "repres": [7, 8, 9, 11], "anoth": [7, 8, 9, 14], "remot": [7, 8, 9, 11], "extra": [7, 8, 9], "requir": [7, 8, 9, 11], "well": [7, 8, 9, 11], "first": [7, 8, 9, 11, 12, 14], "second": [7, 8, 9, 11, 12], "third": [7, 8, 9], "select": [7, 8, 9, 11], "either": [7, 8, 9, 11], "previous": [7, 8, 9], "broad": [7, 8, 9], "focus": [7, 8, 9], "which": [7, 8, 9, 11, 14], "easier": [7, 8, 9], "detail": [7, 8, 9, 11], "found": [7, 8, 9, 11], "http": [7, 8, 9, 13, 15], "sourcewar": [7, 8, 9, 13], "org": [7, 8, 9, 13], "onlinedoc": [7, 8, 9], "connect": [7, 8, 9], "By": [7, 8, 9, 13, 14], "hit": [7, 8, 9, 14], "befor": [7, 8, 9, 12], "while": [7, 8, 9, 12, 14], "other": [7, 8, 9, 12, 13, 14], "freeli": [7, 8, 9], "resum": [7, 8, 9, 14], "quickli": [7, 8, 9], "confus": [7, 8, 9], "lock": [7, 8, 9, 14], "prevent": [7, 8, 9], "avoid": [7, 8, 9, 14], "intervent": [7, 8, 9], "type": [7, 8, 9, 11], "individu": [7, 8, 9], "thei": [7, 8, 9, 11, 14], "togeth": [7, 8, 9, 14], "underli": [7, 8, 9], "pass": [7, 8, 9], "flag": [7, 8, 9, 11], "sometim": [7, 8, 9], "desir": [7, 8, 9, 14], "need": [7, 8, 9, 11], "instanc": [7, 8, 9, 11, 14], "simpli": [7, 8, 9], "recommend": [7, 8, 9], "much": [7, 8, 9], "want": [7, 8, 9, 11, 14], "binari": [7, 8, 9, 14], "smooth": [7, 8, 9], "just": [7, 8, 9], "time": [7, 8, 9], "flow": [7, 8, 9], "enabl": [7, 8, 9, 11, 14], "emiss": [7, 8, 9], "g": [7, 8, 9, 13, 14], "disabl": [7, 8, 9, 12, 14], "optim": [7, 8, 9], "o0": [7, 8, 9], "taken": [7, 8, 9], "icpx": [7, 8, 9], "fsycl": [7, 8, 9], "c": [7, 8, 9, 11, 13, 14], "myprogram": [7, 8, 9], "cmake": [7, 8, 9], "cmake_build_typ": [7, 8, 9], "append": [7, 8, 9], "cmake_cxx_flags_debug": [7, 8, 9], "built": [7, 8, 9, 11], "take": [7, 8, 9, 12, 14], "littl": [7, 8, 9], "longer": [7, 8, 9, 13], "up": [7, 8, 9, 13], "than": [7, 8, 9], "usual": [7, 8, 9], "thu": [7, 8, 9], "appear": [7, 8, 9], "slowli": [7, 8, 9], "caus": [7, 8, 9, 12, 13, 14], "problem": [7, 8, 9, 13, 14], "develop": [7, 8, 9, 11, 15], "larger": [7, 8, 9], "ahead": [7, 8, 9], "aot": [7, 8, 9, 15], "rather": [7, 8, 9], "warn": [7, 8, 9], "overview": [7, 8, 9, 11], "do": [7, 8, 9, 14], "must": [7, 8, 9, 11], "fit": [7, 8, 9], "ocloc": [7, 8, 9], "addition": [7, 8, 9], "kbl": [7, 8, 9], "dpcpp": [7, 8, 9, 15], "spir64_gen": [7, 8, 9], "unknown": [7, 8, 9], "sycldevic": [7, 8, 9], "internal_opt": [7, 8, 9], "cl": [7, 8, 9], "opt": [7, 8, 9], "fiopenmp": [7, 8, 9], "fopenmp": [7, 8, 9], "spir64": [7, 8, 9], "export": [7, 8, 9, 11], "libomptarget_opencl_compilation_opt": [7, 8, 9], "libomptarget_level0_compilation_opt": [7, 8, 9], "toctre": 7, "maxdepth": 7, "diff": 7, "superset": 11, "gnu": 11, "project": 11, "extend": 11, "subset": 11, "exist": 11, "case": 11, "add": 11, "openmp": 11, "aka": 11, "focu": 11, "written": 11, "fortran": [11, 13], "languag": 11, "base": [11, 13], "termin": 11, "r": 11, "2024": [11, 15], "13": [11, 14], "recogn": 11, "messag": 11, "toolkit": [11, 13], "hpc": 11, "On": 11, "microsoft": 11, "articl": 11, "simplest": 11, "wai": [11, 14], "check": [11, 14], "compat": 11, "l": 11, "At": 11, "minimum": 11, "dpc": 11, "copi": 11, "util": 11, "onto": 11, "It": 11, "onc": 11, "open": 11, "script": 11, "enter": 11, "prompt": 11, "been": [11, 13], "environment": 11, "regard": 11, "initi": 11, "work": [11, 14], "ex": 11, "temporari": [11, 14], "directori": 11, "runtim": 11, "xeon": 11, "gold": 11, "6248": 11, "50ghz": 11, "build": [11, 14], "24_160000": 11, "present": 11, "appropri": 11, "similar": 11, "acc": 11, "platform": 11, "tm": 11, "9": [11, 14], "01_160000": 11, "ext_oneapi_level_zero": 11, "zero": 11, "center": 11, "max": 11, "1550": 11, "26690": 11, "notic": 11, "last": 11, "understand": 11, "presenc": 11, "paramet": 11, "handl": 11, "prerequisit": 11, "zet_enable_program_debug": 11, "member": 11, "render": 11, "group": 11, "sy": 11, "class": [11, 14], "drm": 11, "card": 11, "prelim_enable_eu_debug": 11, "forc": 11, "libomptarget_devicetyp": [11, 14], "libomptarget_plugin": [11, 14], "level0": [11, 14], "omp_target_offload": [11, 14], "mandatori": [11, 14], "below": [11, 14], "exhaust": 11, "resolv": 11, "arc": 11, "iri": [11, 13], "xe": [11, 13], "graphic": [11, 13], "pci": 11, "ye": 11, "mean": 11, "provid": 11, "06": 11, "28": 11, "later": 11, "advanc": [11, 13], "ssh": 11, "password": 11, "less": 11, "kit": [11, 13], "collect": 11, "Be": 11, "latest": 11, "dedic": 11, "comput": 11, "test": 11, "deploi": 11, "find": [11, 14], "packag": 11, "compon": [11, 13], "sever": [11, 12, 14], "vscode": 11, "summari": 11, "marketplac": 11, "specif": [11, 13], "logo": 11, "Or": 11, "dialog": 11, "ctrl": 11, "shift": 11, "gear": 11, "icon": 11, "browser": 11, "conveni": 11, "brows": 11, "readi": 11, "short": 11, "easi": 11, "especi": 11, "familiar": 11, "yourself": 11, "ubuntu": 11, "tip": 11, "trick": 11, "One": 11, "illustr": 11, "should": 11, "repo": 11, "file": [11, 13], "cli": 11, "explain": 11, "integr": 11, "gtool": 11, "mani": 11, "through": [11, 14], "interfac": [11, 13], "xterm": 11, "discuss": 11, "altern": [11, 14], "cover": 11, "jacobian": 11, "solver": 11, "There": 11, "import": 11, "restrict": 11, "consid": [11, 14], "three": 11, "submit": [11, 12], "four": 11, "simplifi": 11, "complex": 11, "object": [11, 14], "templat": 11, "analog": 12, "empti": 12, "subdevic": 12, "becom": 12, "inact": 12, "silent": 12, "its": 12, "respond": 12, "displac": [12, 13], "download": 13, "standalon": 13, "ani": [13, 14], "visit": 13, "main": [13, 14], "schema": 13, "semant": 13, "orchestr": 13, "portion": 13, "itself": 13, "technologi": [13, 14], "abl": [13, 14], "receiv": 13, "control": [13, 14], "between": [13, 14], "14": [13, 14], "pt": 13, "ptwrite": 13, "payload": 13, "histori": 13, "write": 13, "matrix": 13, "amx": 13, "cet": 13, "shadow": 13, "pointer": 13, "pl3_ssp": 13, "gener": 13, "hardwar": 13, "common": 13, "mpx": 13, "remov": 13, "bound": 13, "ad": 13, "item": 13, "return": [13, 14], "coredump": 13, "rebas": 13, "www": [13, 15], "_": 13, "off": [13, 14], "atom": 13, "region": 13, "sequenc": 13, "dpa": 13, "label": 13, "larg": [13, 14], "grf": 13, "doubl": 13, "number": [13, 14], "half": 13, "concurr": 13, "variou": 13, "bug": 13, "fix": 13, "di": 13, "intern": 13, "error": 13, "kill": 13, "gdbserver": [13, 14], "ze": [13, 14], "left": 13, "background": [13, 14], "wa": 13, "delai": [13, 14], "phase": 13, "method": 14, "inconveni": 14, "invok": 14, "seen": 14, "becaus": 14, "rang": 14, "nd_rang": 14, "overload": 14, "p": 14, "index": 14, "_v1": 14, "32": 14, "could": 14, "solut": 14, "explicitli": 14, "instanti": 14, "Then": 14, "surround": 14, "ifndef": 14, "ndebug": 14, "endif": 14, "bloat": 14, "dimension": 14, "syntax": 14, "anaccessor": 14, "instead": 14, "workitemid": 14, "1234": 14, "semaphor": 14, "implicitli": 14, "insert": 14, "boundari": 14, "omp": 14, "h": 14, "int": 14, "void": 14, "const": 14, "float": 14, "sum": 14, "f": 14, "alpha": 14, "pragma": 14, "reduct": 14, "11": 14, "size_t": 14, "j": 14, "12": 14, "15": 14, "q": 14, "omp_test": 14, "barrier": 14, "disassembli": 14, "address": 14, "0xfffdf000": 14, "extract": 14, "0xfffdf460": 14, "1120": 14, "0xfffe4a70": 14, "23152": 14, "0xfffe4bb0": 14, "23472": 14, "m": 14, "0x00000000fffe0980": 14, "6528": 14, "w": 14, "send": 14, "gtwy": 14, "m0": 14, "null": 14, "r4": 14, "0x0": 14, "0x02000004": 14, "wr": 14, "rd": 14, "signal": 14, "schedul": 14, "expect": 14, "replai": 14, "gbd": 14, "contrast": 14, "around": 14, "ever": 14, "delet": 14, "afterward": 14, "ensur": 14, "whether": 14, "strai": 14, "u": [14, 15], "grep": 14, "killal": 14, "virtual": 14, "direct": 14, "vt": 14, "d": 14, "bio": 14, "menu": 14, "thousand": 14, "satisfi": 14, "feasibl": 14, "statement": 14, "guard": 14, "would": 14, "move": 14, "claus": 14, "rebuild": 14, "report": 14, "timeout": 14, "respons": 14, "increas": 14, "encount": 14, "remotetimeout": 14, "com": 15, "content": 15, "en": 15, "doc": 15, "dam": 15, "central": 15, "librari": 15, "05": 15, "mpi": 15, "mp4": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"debug": [0, 1, 2, 3, 6, 7, 8, 9, 11], "linux": [0, 1, 11, 13], "applic": [0, 1, 2, 11], "gdb": [0, 1, 2, 5, 7, 8, 9, 11, 14], "window": [2, 11], "exampl": 3, "user": [4, 11], "": 4, "guid": [4, 11], "document": [5, 13], "oneapi": [5, 11], "refer": 5, "kernel": [6, 14], "cpu": [6, 11], "gpu": [6, 7, 8, 9, 11], "major": [6, 13], "differ": [6, 11], "what": [7, 11], "i": [7, 11], "intel": [7, 8, 9, 11], "distribut": [7, 8, 9, 11], "execut": [7, 8, 9], "us": [7, 8, 9, 11], "compat": [7, 8, 9], "inferior": [7, 8, 9], "thread": [7, 8, 9], "simd": [7, 8, 9], "lane": [7, 8, 9], "referenc": [7, 8, 9], "control": [7, 8, 9], "schedul": [7, 8, 9], "dump": [7, 8, 9], "inform": [7, 8, 9], "One": [7, 8, 9], "more": [7, 8, 9], "appli": [7, 8, 9], "step": [7, 8, 9], "code": [7, 8, 9, 11], "after": [7, 8, 9], "breakpoint": [7, 8, 9, 14], "build": [7, 8, 9], "sycl": [7, 8, 9, 11], "an": [7, 8, 9, 11], "openmp": [7, 8, 9], "faq": 11, "between": 11, "how": 11, "do": 11, "get": 11, "start": 11, "my": 11, "can": 11, "tell": 11, "system": [11, 13], "softwar": 11, "hardwar": 11, "ar": 11, "properli": 11, "configur": 11, "where": [11, 13], "download": 11, "current": 11, "driver": 11, "eclips": 11, "visual": 11, "studio": 11, "releas": [11, 13], "note": [11, 13], "troubleshoot": [11, 14], "manual": 11, "tutori": 11, "docker": 11, "contain": 11, "mpi": 11, "librari": 11, "run": 11, "multi": 11, "devic": 11, "multipl": 11, "featur": [11, 13], "known": 12, "issu": 12, "find": 13, "o": 13, "kei": 13, "capabl": 13, "requir": 13, "chang": 13, "2024": 13, "2": 13, "1": 13, "templat": 14, "oper": 14, "cannot": 14, "Be": 14, "found": 14, "accessor": 14, "resolv": 14, "appear": 14, "hang": 14, "synchron": 14, "point": 14, "stop": 14, "respond": 14, "condit": 14, "all": 14, "mode": 14, "non": 14, "video": 15}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Debugging Linux Applications with GDB": [[0, "debugging-linux-applications-with-gdb"], [1, "debugging-linux-applications-with-gdb"]], "Debugging Windows Applications with GDB": [[2, "debugging-windows-applications-with-gdb"]], "Debug Examples": [[3, "debug-examples"]], "User\u2019s Guide": [[4, "user-s-guide"]], "Documentation": [[5, "documentation"], [13, "documentation"]], "oneAPI GDB Reference Documents": [[5, "oneapi-gdb-reference-documents"]], "References": [[5, "references"]], "Debugging a Kernel on CPU and GPU: Major Differences": [[6, "debugging-a-kernel-on-cpu-and-gpu-major-differences"]], "What is Intel\u00ae Distribution for GDB*?": [[7, "what-is-intel-distribution-for-gdb"]], "Debug GPU Execution Using Intel\u00ae Distribution for GDB* on compatible GPUs": [[7, "debug-gpu-execution-using-intel-distribution-for-gdb-on-compatible-gpus"], [8, "debug-gpu-execution-using-intel-distribution-for-gdb-on-compatible-gpus"], [9, "debug-gpu-execution-using-intel-distribution-for-gdb-on-compatible-gpus"]], "Inferiors, Threads, and SIMD Lanes Referencing in GDB*": [[7, "inferiors-threads-and-simd-lanes-referencing-in-gdb"], [8, "inferiors-threads-and-simd-lanes-referencing-in-gdb"], [9, "inferiors-threads-and-simd-lanes-referencing-in-gdb"]], "Controlling the Scheduler": [[7, "controlling-the-scheduler"], [8, "controlling-the-scheduler"], [9, "controlling-the-scheduler"]], "Dumping Information on One or More Threads/Lanes (Thread Apply)": [[7, "dumping-information-on-one-or-more-threads-lanes-thread-apply"], [8, "dumping-information-on-one-or-more-threads-lanes-thread-apply"], [9, "dumping-information-on-one-or-more-threads-lanes-thread-apply"]], "Stepping GPU Code After a Breakpoint": [[7, "stepping-gpu-code-after-a-breakpoint"], [8, "stepping-gpu-code-after-a-breakpoint"], [9, "stepping-gpu-code-after-a-breakpoint"]], "Building a SYCL Executable for Use with Intel\u00ae Distribution for GDB*": [[7, "building-a-sycl-executable-for-use-with-intel-distribution-for-gdb"], [8, "building-a-sycl-executable-for-use-with-intel-distribution-for-gdb"], [9, "building-a-sycl-executable-for-use-with-intel-distribution-for-gdb"]], "Building an OpenMP* Executable for use with Intel\u00ae Distribution for GDB*": [[7, "building-an-openmp-executable-for-use-with-intel-distribution-for-gdb"], [8, "building-an-openmp-executable-for-use-with-intel-distribution-for-gdb"], [9, "building-an-openmp-executable-for-use-with-intel-distribution-for-gdb"]], "Intel\u00ae Distribution for GDB*": [[8, "intel-distribution-for-gdb"], [9, "intel-distribution-for-gdb"]], ".": [[10, "blank"]], "FAQs for GDB*": [[11, "faqs-for-gdb"]], "What is the difference between gdb and gdb-oneapi?": [[11, "what-is-the-difference-between-gdb-and-gdb-oneapi"]], "How do I get started debugging my GPU application?": [[11, "how-do-i-get-started-debugging-my-gpu-application"]], "How can I tell if my system software and GPU hardware are properly configured for debugging my application on an Intel GPU?": [[11, "how-can-i-tell-if-my-system-software-and-gpu-hardware-are-properly-configured-for-debugging-my-application-on-an-intel-gpu"]], "Where do I download current GPU drivers for debugging my application on GPU?": [[11, "where-do-i-download-current-gpu-drivers-for-debugging-my-application-on-gpu"]], "Can I debug my GPU application with Eclipse?": [[11, "can-i-debug-my-gpu-application-with-eclipse"]], "Can I debug my GPU application with Visual Studio on Windows?": [[11, "can-i-debug-my-gpu-application-with-visual-studio-on-windows"]], "Can I debug my GPU application with Visual Studio Code?": [[11, "can-i-debug-my-gpu-application-with-visual-studio-code"]], "Where are the gdb-oneapi release notes?": [[11, "where-are-the-gdb-oneapi-release-notes"]], "Where is the gdb-oneapi debugging troubleshooting guide?": [[11, "where-is-the-gdb-oneapi-debugging-troubleshooting-guide"]], "Where is the Intel\u00ae Distribution for GDB* user manual?": [[11, "where-is-the-intel-distribution-for-gdb-user-manual"]], "Tutorial: Debug a SYCL application on Windows": [[11, "tutorial-debug-a-sycl-application-on-windows"]], "Tutorial: Debug a SYCL application on a CPU on Linux": [[11, "tutorial-debug-a-sycl-application-on-a-cpu-on-linux"]], "Tutorial: Debug a SYCL application on a GPU on Linux": [[11, "tutorial-debug-a-sycl-application-on-a-gpu-on-linux"]], "Tutorial: Debug a SYCL application in a Docker* container": [[11, "tutorial-debug-a-sycl-application-in-a-docker-container"]], "Tutorial: Debug an Intel\u00ae MPI Library application running on a GPU": [[11, "tutorial-debug-an-intel-mpi-library-application-running-on-a-gpu"]], "Tutorial: Multi-device debugging (multiple GPU devices)": [[11, "tutorial-multi-device-debugging-multiple-gpu-devices"]], "Useful debugging features": [[11, "useful-debugging-features"]], "Known Issues": [[12, "id1"]], "Release Notes": [[13, "release-notes"]], "Where to Find the Release": [[13, "where-to-find-the-release"]], "Release Notes for Linux* OS": [[13, "release-notes-for-linux-os"]], "Major Features": [[13, "major-features"]], "Key Capabilities": [[13, "key-capabilities"]], "System Requirements": [[13, "system-requirements"]], "Changes in the 2024.2 Release": [[13, "changes-in-the-2024-2-release"]], "Changes in the 2024.1 Release": [[13, "changes-in-the-2024-1-release"]], "Troubleshooting": [[14, "troubleshooting"]], "Template Operators Cannot Be Found": [[14, "template-operators-cannot-be-found"]], "Accessor Operator [] Cannot Be Resolved": [[14, "accessor-operator-cannot-be-resolved"]], "GDB appears to hang at synchronization points": [[14, "gdb-appears-to-hang-at-synchronization-points"]], "Kernel Stops Responding": [[14, "kernel-stops-responding"]], "Conditional Breakpoints": [[14, "conditional-breakpoints"]], "All-stop mode": [[14, "all-stop-mode"]], "Non-stop mode": [[14, "non-stop-mode"]], "Videos": [[15, "videos"]]}, "indexentries": {}})