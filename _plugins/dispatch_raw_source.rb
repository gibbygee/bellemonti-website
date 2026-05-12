# Writes the raw markdown source of each dispatch as a static file at
# /dispatches/<slug>.md so the rendered page can offer a "copy markdown" action
# that returns clean markdown (not HTML).
Jekyll::Hooks.register :site, :post_write do |site|
  dispatches = site.collections['dispatches']
  next unless dispatches

  dispatches.docs.each do |doc|
    slug = File.basename(doc.path, '.md').sub(/^\d{4}-\d{2}-\d{2}-/, '')
    raw  = File.read(doc.path)
    body = raw.sub(/\A---\s*\n.*?\n---\s*\n/m, '').lstrip

    out_path = File.join(site.dest, 'dispatches', "#{slug}.md")
    FileUtils.mkdir_p(File.dirname(out_path))
    File.write(out_path, body)
  end
end
