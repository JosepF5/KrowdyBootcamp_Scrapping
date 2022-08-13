import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['src/sw.js', 'src/scripts/scrapper.js', 'src/scripts/pop.js', 'src/scripts/scrapCandidates.js'],
    watch:true,
    bundle: true,
    outdir: 'dist',
    minify: true,
}).then(result => console.log(JSON.stringify(result)))
.catch(error => console.log(error));