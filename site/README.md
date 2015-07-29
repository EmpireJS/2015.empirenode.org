# EmpireNode 2015

## Running

A make file is provided for ease of use. Simply install meteor, and then run the following command.

    make start
    
## Deploying

    make deploy

### Permission issues?

Running with sudo shouldn't be necessary.

    cd ~
    sudo chown -R $(whoami) .

## Updating packages

    meteor update

Note: Updating Bootstrap theme can be a bit tricky as the file ```lib/less/vendor/bootstrap/custom.bootstrap.import.less``` may need to be manually deleted so it can be regenerated with new variables requires by a newer version of bootstrap. The easiest way IMO, is to just delete the file, let it regenerate, and then look at the diff to find any changes you made previously that may have been lost. To mitigate this, put variables in ```lib/less/bootstrap-theme/variables.less``` when possible.
