# Git Excercise insights
Exercise Learning -
1. Basically git is divided into four section
	- Repository - When the changes are commited, then it will be stored in Repository
	- Index - When the file is staged (git add .), then file will be stored in Index Area
	- WorkingDirectory - When file is untacked of modified.
	- Stash Area -
	
After commit HEAD will point to latest commit.
It will create unique 40 Digit SHA key.
Whenever we commmit file it will generate hash content is used to uniquely point that version of file. Commit object will point to either the another tree or blob data.
2. `git cat-file -t <commit id>` - This command will show which type of object it is.
	`git cat-file -t <commit id>` - This command will display below information regarding commit -
									tree fbc67f726746ff12bf203fa6afce885ec4515e49
									author Mihir Panchal <mihir.panchal@ad.infosys.com> 1560750274 +0530
									committer Mihir Panchal <mihir.panchal@ad.infosys.com> 1560750274 +0530
									Initial commit
									
3. `git ls-files -s` -  This command will show all the files of Staging area. If the file is untracked in didn't commited even once then it will not display in Staging area.
4. git reset - This command is used for undo the local changes. This command will also delete the file from statging area which are didn't commited.
5. git stash push -m "Stash for Testing" - With this command it will stash the changes with given name. Then checkout another branch and commit.
	git stash list - After comeback in original branch and use this command to list all the stashes.
	git stash pop stash@{0} - With this command removed this stash from list and applied in working directory.
	
6. git tag v.1.5 - It will create light weight tag and attached to the latest commit with this tag
7. git tag -a v.1.6 -m "My Version 1.6" - It will create annotated tag with the Message of Version.
8. git show - This will show tagger version, tagger date and Annotated message.
9. git merge - Merged two branch and it will creare merger branch with both the changes.
10. After Changing same file with two different branches, When we run command for git merge it will show merge conflicts. After resolving conflict it will alow to commit the changes.
11. git log <branch-id> - It will show only specific branch command logs
	git reflog master --since="24 hours ago" - it will show logs from past 20 hours
	
12. SHA command will create unique 40-bit key based on content. If content will same then key will be same also.
